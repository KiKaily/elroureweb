
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import LeftMenu from "./LeftMenu";

type MainContentProps = {
  skipAnimations?: boolean;
  forceMenuOpen?: boolean;
};

const MainContent: React.FC<MainContentProps> = ({
  skipAnimations = false,
  forceMenuOpen = false,
}) => {
  const isMobile = useIsMobile();
  const [loadingStage, setLoadingStage] = useState(() => {
    // Always start fresh animations unless explicitly skipped
    return skipAnimations ? 4 : 0;
  });

  useEffect(() => {
    if (skipAnimations) {
      setLoadingStage(6);
      return;
    }
    
    // Stage 1: Logo (handled in Home.tsx at 100ms)
    // Stage 2: Center image (at 1000ms)
    const imageTimer = setTimeout(() => setLoadingStage(2), 1000);
    // Stage 3: Left text (at 2000ms)
    const textTimer = setTimeout(() => setLoadingStage(3), 2000);
    // Stage 4: Menu (at 2800ms)
    const menuTimer = setTimeout(() => setLoadingStage(4), 2800);
    // Stage 5: Email (at 3500ms)
    const emailTimer = setTimeout(() => setLoadingStage(5), 3500);
    // Stage 6: "diseñado por" text (at 4200ms)
    const designTimer = setTimeout(() => setLoadingStage(6), 4200);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
      clearTimeout(menuTimer);
      clearTimeout(emailTimer);
      clearTimeout(designTimer);
    };
  }, [skipAnimations, isMobile]);

  useEffect(() => {
    console.log("Current loading stage:", loadingStage);
  }, [loadingStage]);

  return (
    <section className="flex flex-col items-center relative w-full max-w-full bg-fixed">
      <div className={`relative flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center items-center'} w-full`}>
        {!isMobile && (
          <>
            <div className="flex flex-col justify-center z-20 absolute left-0 md:left-1/2 lg:left-[5%] top-1/2 lg:top-[52%] transform -translate-y-1/2 md:-translate-x-1/2 lg:-translate-x-0 max-h-full" style={{ minWidth: '300px', maxWidth: '400px', overflowWrap: 'break-word' }}>
              <div className="w-full mb-5">
                <p
                  className={`font-montserrat text-stone-100 text-xs xl:text-sm leading-relaxed text-glow transition-opacity duration-1000 ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    transform: loadingStage >= 3 ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 1s ease-out, opacity 1s ease-out'
                  }}
                >
                  <span className="block text-center md:text-center lg:text-left w-full mx-auto">Del 2001 al 2025 hicimos un viaje fascinante: una escuela para familias con criaturas de 3 a 12 años.</span>
                  <span className="block mt-3 text-center md:text-center lg:text-left w-full mx-auto">¿Cuál ha sido el norte de ese viaje?</span>
                  <span className="block mt-3 text-center md:text-center lg:text-left w-full mx-auto">Cada criatura es una semilla.</span>
                  <span className="block mt-3 text-center md:text-center lg:text-left w-full mx-auto">La fuerza y la inteligencia de la vida se ocupan de que se manifieste y se desarrolle. Queremos sintonizar con este latido, apoyarlo y dejar atrás lo que nos limita, para acompañarlos, para acompañarnos, desde el respeto y la consciencia de la naturaleza de cada cual.</span>
                </p>
              </div>
            </div>
            <LeftMenu loadingStage={loadingStage} />
          </>
        )}
        
        <div
          className={`relative flex justify-center items-center overflow-hidden transition-opacity duration-1000 mx-auto ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <div className="text-glow-strong rounded-lg flex justify-center items-center mx-auto">
            <img
              src="/assets/anillos madera.png"
              className={`w-[25vw] max-w-[400px] min-w-[140px] max-sm:w-[50vw] max-sm:max-w-none h-auto object-contain transition-opacity duration-1000 mx-auto ${loadingStage >= 2 ? 'opacity-90' : 'opacity-0'}`}
              alt="Decorative Pattern"
              style={{
                transition: "opacity 1s ease-in-out"
              }}
            />
          </div>
        </div>

        {isMobile && (
          <>
            <div className="w-[90%] mt-8 space-y-4">
              <p 
                className={`font-montserrat text-stone-100 text-base sm:text-lg leading-relaxed text-center text-glow transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-90' : 'opacity-0'}`}
                style={{
                  transform: loadingStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 1s ease-out, opacity 1s ease-out'
                }}
              >
                Del 2001 al 2025 hicimos un viaje fascinante: una escuela para familias con criaturas de 3 a 12 años.
              </p>
              <p 
                className={`font-montserrat text-stone-100 text-base sm:text-lg leading-relaxed text-center text-glow transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-90' : 'opacity-0'}`}
                style={{
                  transform: loadingStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 1s ease-out, opacity 1s ease-out'
                }}
              >
                ¿Cuál ha sido el norte de ese viaje?
              </p>
              <p 
                className={`font-montserrat text-stone-100 text-base sm:text-lg leading-relaxed text-center text-glow transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-90' : 'opacity-0'}`}
                style={{
                  transform: loadingStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 1s ease-out, opacity 1s ease-out'
                }}
              >
                Cada criatura es una semilla.
              </p>
              <p 
                className={`font-montserrat text-stone-100 text-base sm:text-lg leading-relaxed text-center text-glow transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-90' : 'opacity-0'}`}
                style={{
                  transform: loadingStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 1s ease-out, opacity 1s ease-out'
                }}
              >
                La fuerza y la inteligencia de la vida se ocupan de que se manifieste y se desarrolle. Queremos sintonizar con este latido, apoyarlo y dejar atrás lo que nos limita, para acompañarlos, para acompañarnos, desde el respeto y la consciencia de la naturaleza de cada cual.
              </p>
            </div>
            
            <div className="w-[90%] mt-8 flex justify-center">
              <LeftMenu loadingStage={loadingStage} isMobile={true} />
            </div>
          </>
        )}
      </div>
      
      <a
        href="mailto:experienciaroure@proton.me"
        className={`font-montserrat text-stone-100 text-sm xl:text-base text-glow hover:text-opacity-80 transition-all duration-1000 mt-8 ${loadingStage >= 5 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transition: 'opacity 1s ease-out',
          textDecoration: 'none'
        }}
      >
        experienciaroure@proton.me
      </a>
      <a
        href="https://www.rcrear.com/"
        className={`font-montserrat text-stone-100 text-xs xl:text-sm text-glow hover:text-opacity-80 transition-all duration-1000 mt-2 ${loadingStage >= 6 ? 'opacity-50' : 'opacity-0'}`}
        style={{
          transition: 'opacity 1s ease-out',
          textDecoration: 'none'
        }}
      >
        diseño web de Rcrear.com
      </a>

    </section>
  );
};

export default MainContent;
