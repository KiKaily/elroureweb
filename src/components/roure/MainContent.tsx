
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
      setLoadingStage(4);
      return;
    }
    
    const imageTimer = setTimeout(() => setLoadingStage(1), 100);
    const logoTimer = setTimeout(() => setLoadingStage(2), 2000);
    const emailTimer = setTimeout(() => setLoadingStage(3), 2500);
    const menuTimer = setTimeout(() => setLoadingStage(4), 3000);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(logoTimer);
      clearTimeout(emailTimer);
      clearTimeout(menuTimer);
    };
  }, [skipAnimations, isMobile]);

  useEffect(() => {
    console.log("Current loading stage:", loadingStage);
  }, [loadingStage]);

  return (
    <section className="flex flex-col items-center relative w-full max-w-[90vw] 2xl:max-w-[1800px] mt-10">
      <div className={`relative flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} w-full`}>
        {!isMobile && (
          <>
            <div className="flex flex-col justify-center z-20 absolute left-0 top-1/2 transform -translate-y-1/2 max-h-full" style={{ minWidth: '10%', maxWidth: '200px', left: '1%' }}>
              <div className="w-full mb-5">
                <p 
                  className={`font-montserrat text-stone-100 text-xs xl:text-sm 2xl:text-base leading-relaxed text-glow transition-opacity duration-1000 ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    transform: loadingStage >= 2 ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 1s ease-out, opacity 1s ease-out'
                  }}
                >
                  Del 2001 al 2025 hicimos un viaje fascinante: una escuela para familias con criaturas de 3 a 12 años.
                  <br/><br/>
                  ¿Cuál ha sido el norte de ese viaje?
                  <br/><br/>
                  Cada criatura es una semilla.
                  <br/><br/>
                  La fuerza y la inteligencia de la vida se ocupan de que se manifieste y se desarrolle. Queremos sintonizar con este latido, apoyarlo y dejar atrás lo que nos limita, para acompañarlos, para acompañarnos, desde el respeto y la consciencia de la naturaleza de cada cual.
                </p>
              </div>
            </div>
            <LeftMenu loadingStage={loadingStage} />
          </>
        )}
        
        <div
          className={`relative flex justify-center items-center overflow-hidden mx-auto transition-opacity duration-3000 ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transition: 'opacity 4s ease-in-out',
            transform: 'translateX(0)',
            maxWidth: '60vw'
          }}
        >
          <div className="text-glow rounded-lg">
            <img
              src="/assets/anillos madera.png"
              className={`w-[35vw] max-w-[600px] min-w-[280px] max-sm:w-[90vw] max-sm:max-w-none h-auto object-contain transition-opacity duration-3000 ${loadingStage >= 1 ? 'opacity-90' : 'opacity-0'}`}
              alt="Decorative Pattern"
              style={{
                transition: "opacity 4s ease-in-out"
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
        className={`font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl text-glow hover:text-opacity-80 transition-all duration-1000 mt-20 ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transition: 'opacity 1s ease-out',
          textDecoration: 'none'
        }}
      >
        experienciaroure@proton.me
      </a>
        <br/><br/>
      <a
        href="https://www.rcrear.com/"
        className={`font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl text-glow hover:text-opacity-80 transition-all duration-1000 mt-20 ${loadingStage >= 3 ? 'opacity-50' : 'opacity-0'}`}
        style={{
          transition: 'opacity 15s ease-out',
          textDecoration: 'none'
        }}
      >
        diseño web de Rcrear.com
      </a>

    </section>
  );
};

export default MainContent;
