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
    return skipAnimations ? 4 : 0;
  });

  useEffect(() => {
    if (skipAnimations) {
      setLoadingStage(6);
      return;
    }

    const timers = [
      setTimeout(() => setLoadingStage(2), 1000),
      setTimeout(() => setLoadingStage(3), 2000),
      setTimeout(() => setLoadingStage(4), 2800),
      setTimeout(() => setLoadingStage(5), 3500),
      setTimeout(() => setLoadingStage(6), 4200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [skipAnimations, isMobile]);

  return (
    <section className="flex flex-col items-center justify-center relative w-full max-w-full bg-fixed h-full">
      <div className={`relative flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center items-center'} w-full mb-8 lg:mb-16`}>
        {!isMobile && (
          <>
            <div
              className="flex flex-col justify-center z-20 absolute left-0 md:left-1/2 lg:left-[5%] top-1/2 lg:top-[52%] transform -translate-y-1/2 md:-translate-x-1/2 lg:-translate-x-0 max-h-full"
              style={{
                minWidth: "300px",
                maxWidth: "400px",
                overflowWrap: "break-word",
              }}
            >
              <div className="w-full mb-5">
                <p
                  className={`font-montserrat text-stone-100 text-xs xl:text-sm leading-relaxed text-glow transition-opacity duration-1000 ${
                    loadingStage >= 3 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform:
                      loadingStage >= 3 ? "translateY(0)" : "translateY(20px)",
                    transition: "transform 1s ease-out, opacity 1s ease-out",
                  }}
                >
                  <span className="block text-center md:text-center lg:text-left w-full mx-auto">
                    Del 2001 al 2025 hicimos un viaje fascinante: una escuela para familias con criaturas de 3 a 12 años.
                  </span>
                  <span className="block mt-3 text-center md:text-center lg:text-left w-full mx-auto">
                    ¿Cuál ha sido el norte de ese viaje?
                  </span>
                  <span className="block mt-3 text-center md:text-center lg:text-left w-full mx-auto text-amber-400">
                    Cada criatura es una semilla.
                  </span>
                  <span className="block mt-3 text-center md:text-center lg:text-left w-full mx-auto">
                    La fuerza y la inteligencia de la vida se ocupan de que se manifieste y se desarrolle. Queremos sintonizar con este latido, apoyarlo y dejar atrás lo que nos limita, para acompañarlos, para acompañarnos, desde el respeto y la consciencia de la naturaleza de cada cual.
                  </span>
                </p>
              </div>
            </div>
            <LeftMenu loadingStage={loadingStage} />
          </>
        )}

        {/* IMAGEN CENTRAL */}
        <div
          className={`relative flex justify-center items-center transition-opacity duration-1000 mx-auto ${
            loadingStage >= 2 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 1s ease-in-out",
          }}
        >
          <img
            src="/assets/anillos madera.png"
            className={`w-[25vw] max-w-[400px] min-w-[140px] max-sm:w-[50vw] h-auto object-contain transition-opacity duration-1000 mx-auto ${
              loadingStage >= 2 ? "opacity-90" : "opacity-0"
            }`}
            alt="Decorative Pattern"
            style={{
              transition: "opacity 1s ease-in-out",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3)) drop-shadow(0 0 15px rgba(255,255,255,0.15))"
            }}
          />
        </div>

        {/* MOBILE */}
        {isMobile && (
          <>
            <div className="w-[90%] mt-8 flex justify-center">
              <LeftMenu loadingStage={loadingStage} isMobile={true} />
            </div>
            <div className="w-[90%] mt-8 space-y-4">
              <p
                className={`font-montserrat text-stone-100 text-xs leading-relaxed text-glow transition-opacity duration-1000 ${
                  loadingStage >= 3 ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: loadingStage >= 3 ? "translateY(0)" : "translateY(20px)",
                  transition: "transform 1s ease-out, opacity 1s ease-out",
                }}
              >
                <span className="block text-center w-full mx-auto">
                  Del 2001 al 2025 hicimos un viaje fascinante: una escuela para familias con criaturas de 3 a 12 años.
                </span>
                <span className="block mt-3 text-center w-full mx-auto">
                  ¿Cuál ha sido el norte de ese viaje?
                </span>
                <span className="block mt-3 text-center w-full mx-auto text-amber-400">
                  Cada criatura es una semilla.
                </span>
                <span className="block mt-3 text-center w-full mx-auto">
                  La fuerza y la inteligencia de la vida se ocupan de que se manifieste y se desarrolle. Queremos sintonizar con este latido, apoyarlo y dejar atrás lo que nos limita, para acompañarlos, para acompañarnos, desde el respeto y la consciencia de la naturaleza de cada cual.
                </span>
              </p>
            </div>
          </>
        )}
      </div>

      {/* EMAIL Y CRÉDITO */}
      <a
        href="mailto:experienciaroure@proton.me"
        className={`font-montserrat text-stone-100 text-sm xl:text-base text-glow hover:text-opacity-80 transition-all duration-1000 mt-8 ${
          loadingStage >= 5 ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 1s ease-out",
          textDecoration: "none",
        }}
      >
        experienciaroure@proton.me
      </a>
      <a
        href="https://www.rcrear.com/"
        className={`font-montserrat text-stone-100 text-xs xl:text-sm text-glow hover:text-opacity-80 transition-all duration-1000 mt-2 ${
          loadingStage >= 6 ? "opacity-50" : "opacity-0"
        }`}
        style={{
          transition: "opacity 1s ease-out",
          textDecoration: "none",
        }}
      >
        diseño web de Rcrear.com
      </a>
    </section>
  );
};

export default MainContent;
