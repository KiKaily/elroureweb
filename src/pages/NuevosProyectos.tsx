import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import BackToTop from "@/components/roure/BackToTop";

const NuevosProyectos: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  }, [isMobile]);
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript menu-page-bg">
      <BackToTop />
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-inter text-amber-500 text-xl text-glow hover:text-opacity-80 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          ← Volver
        </Link>
        
        <h1 className="font-inter text-orange-700 text-4xl xl:text-5xl 2xl:text-6xl mb-12 text-center animate-fade-in text-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          ¿En qué estamos?
        </h1>
        
        <div className="w-full max-w-[800px] space-y-16">
          {/* Section 1 */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl 2xl:text-4xl mb-6 text-left text-glow">
              Begoña González
            </h2>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-left mb-8">
              Fuí co-fundadora y coordinadora de La Casita y El Roure. Madre, maestra, formadora, orientadora y articulista, formada en diferentes disciplinas corporales, artísticas, psicológicas y educativas, así como en Comunicación consciente (CNV) y facilitación de grupos.
En este momento me dedico al acompañamiento a madres, padres y profesionales a partir de  las diferentes situaciones y dificultades cotidianas que conlleva la relación con niñas, niños y adolescentes. Por otra parte facilito formaciones adaptadas a las necesidades de colectivos educativos interesados en el enfoque de la educación viva y la comunicación consciente.</p>
            <div className="w-full flex justify-center">
              <img
                src="/lovable-uploads/bego_cierre.png"
                className="max-w-full h-auto rounded-lg"
                alt="Nuevos Proyectos - Sección 1"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl 2xl:text-4xl mb-6 text-left text-glow">
              Paco Robles
            </h2>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-left mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="w-full flex justify-center">
              <img
                src="/lovable-uploads/bego_cierre.png"
                className="max-w-full h-auto rounded-lg"
                alt="Nuevos Proyectos - Sección 2"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl 2xl:text-4xl mb-6 text-left text-glow">
              Clara Giménez
            </h2>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-left mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="w-full flex justify-center">
              <img
                src="/lovable-uploads/bego_cierre.png"
                className="max-w-full h-auto rounded-lg"
                alt="Nuevos Proyectos - Sección 3"
              />
            </div>
          </div>
        </div>
        <div className="mb-20"></div>
      </section>
    </main>
  );
};

export default NuevosProyectos;