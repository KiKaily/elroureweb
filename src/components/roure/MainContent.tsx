import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import LeftMenu from "./LeftMenu";
import Logo from "./Logo";

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
      setTimeout(() => setLoadingStage(1), 8000),
      setTimeout(() => setLoadingStage(2), 5000),
      setTimeout(() => setLoadingStage(3), 6000),
      setTimeout(() => setLoadingStage(4), 7000),
      setTimeout(() => setLoadingStage(5), 8000),
      setTimeout(() => setLoadingStage(6), 9000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [skipAnimations, isMobile]);

  return (
  <section className="flex flex-col items-center justify-center relative w-full max-w-full bg-fixed min-h-screen overflow-hidden md:overflow-auto">
      {/* Desktop layout: logo above, centered three-column row (text | image | menu), then email/footer below */}
      {!isMobile ? (
        <div className="flex flex-col items-center justify-center w-full h-full py-8">
          {/* Logo area: centered between top and image */}
          <div className={`mb-6 transition-all duration-700 ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transform: loadingStage >= 1 ? 'translateX(-5%)' : undefined }}>
            <Logo className="mx-auto logo-responsive" animationDelay={0} />
          </div>

          {/* Central row */}
          <div className="flex items-center justify-center w-full max-w-7xl px-6">
            {/* Left text aligned to center of image */}
            <div className="flex-1 flex items-center justify-center pr-8">
              <div className={`max-w-[560px] ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ transform: loadingStage >= 3 ? 'translateY(0)' : 'translateY(20px)', transition: 'transform 1s ease-out, opacity 1s ease-out' }}>
                <p className="left-text font-montserrat text-stone-100 text-sm lg:text-base leading-relaxed text-glow text-center lg:text-left">
                  <span className="block">Del 2001 al 2025 hicimos un viaje fascinante: una escuela para familias con criaturas de 3 a 12 años.</span>
                  <span className="block mt-3">¿Cuál ha sido el norte de ese viaje?</span>
                  <span className="block mt-3 text-amber-400">Cada criatura es una semilla.</span>
                  <span className="block mt-3">La fuerza y la inteligencia de la vida se ocupan de que se manifieste y se desarrolle. Queremos sintonizar con este latido, apoyarlo y dejar atrás lo que nos limita, para acompañarlos, para acompañarnos, desde el respeto y la consciencia de la naturaleza de cada cual.</span>
                </p>
              </div>
            </div>

            {/* Image centered */}
            <div className={`flex-none flex items-center justify-center px-4 ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ transition: 'opacity 1s ease-in-out' }}>
              <img src="/assets/anillos madera.png" className={`w-[20vw] max-w-[720px] min-w-[220px] h-auto object-contain ${loadingStage >= 2 ? 'opacity-90' : 'opacity-0'} transition-opacity duration-1000`} alt="Decorative Pattern" style={{ transition: 'opacity 1s ease-in-out', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3)) drop-shadow(0 0 15px rgba(255,255,255,0.15))' }} />
            </div>

            {/* Right menu aligned with image */}
            <div className="flex-1 flex items-center justify-center pl-8">
              <div className={`max-w-[560px] w-full ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`} style={{ transform: loadingStage >= 4 ? 'translateY(0)' : 'translateY(20px)' }}>
                <LeftMenu loadingStage={loadingStage} />
              </div>
            </div>
          </div>

          {/* Email and credit under the image */}
          <div className={`mt-8 text-center email-credit-stack ${loadingStage >= 5 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ transition: 'opacity 1s ease-out' }}>
            <a href="mailto:experienciaroure@proton.me" className="font-montserrat text-stone-100 text-base text-glow">experienciaroure@proton.me</a>
            <div className={`mt-2 font-montserrat text-stone-100 text-sm text-glow ${loadingStage >= 6 ? 'opacity-50' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease-out' }}>diseño web de Rcrear.com</div>
          </div>
        </div>
      ) : (
        /* Mobile / Tablet stacked order: logo, image, menu, text, email, footer */
        <div className="flex flex-col items-center w-full px-6 py-6 space-y-6">
            <div className={`w-full flex justify-center ${loadingStage >= 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 0.75rem)' }}>
              <Logo className="logo-responsive" animationDelay={0} />
            </div>

          <div className={`w-full flex justify-center ${loadingStage >= 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <img src="/assets/anillos madera.png" className="w-[50vw] max-w-[420px] h-auto object-contain" alt="Decorative Pattern" />
          </div>

          <div className={`w-full ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <LeftMenu loadingStage={loadingStage} isMobile={true} />
          </div>

          <div className={`w-full ${loadingStage >= 3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <p className="font-montserrat text-stone-100 text-sm leading-relaxed text-glow">
              <span className="block">Del 2001 al 2025 hicimos un viaje fascinante: una escuela para familias con criaturas de 3 a 12 años.</span>
              <span className="block mt-3">¿Cuál ha sido el norte de ese viaje?</span>
              <span className="block mt-3 text-amber-400">Cada criatura es una semilla.</span>
              <span className="block mt-3">La fuerza y la inteligencia de la vida se ocupan de que se manifieste y se desarrolle. Queremos sintonizar con este latido, apoyarlo y dejar atrás lo que nos limita, para acompañarlos, para acompañarnos, desde el respeto y la consciencia de la naturaleza de cada cual.</span>
            </p>
          </div>

          <div className={`w-full text-center email-credit-stack ${loadingStage >= 5 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <a href="mailto:experienciaroure@proton.me" className="font-montserrat text-stone-100 text-sm text-glow">experienciaroure@proton.me</a>
            <div className={`mt-2 font-montserrat text-stone-100 text-xs text-glow ${loadingStage >= 6 ? 'opacity-50' : 'opacity-0'}`}>diseño web de Rcrear.com</div>
          </div>
        </div>
      )}

    </section>
  );
};

export default MainContent;
