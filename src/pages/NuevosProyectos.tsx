import React from "react";
import { Link } from "react-router-dom";

const NuevosProyectos: React.FC = () => {
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-inter text-stone-100 text-xl hover:text-opacity-80 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          ← Volver
        </Link>
        
        <h1 className="font-inter text-stone-100 text-4xl xl:text-5xl 2xl:text-6xl mb-12 text-center animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Nuevos Proyectos
        </h1>
        
        <div className="w-full max-w-[800px] space-y-16">
          {/* Section 1 */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-stone-100 text-2xl xl:text-3xl 2xl:text-4xl mb-6 text-center">
              Educación Viva y Comunicación Consciente
            </h2>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-center mb-8">
              Begoña González se dedica ahora a la educación viva y la comunicación consciente, ofreciendo talleres, formaciones y asesoramientos para familias y educadores. Su enfoque se centra en el desarrollo integral del niño, promoviendo un ambiente de respeto y empatía.
            </p>
            <div className="w-full flex justify-center">
              <img
                src="/assets/begoña.jpg"
                className="max-w-full h-auto rounded-lg"
                alt="Nuevos Proyectos - Sección 1"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-stone-100 text-2xl xl:text-3xl 2xl:text-4xl mb-6 text-center">
              Sección 2
            </h2>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-center mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="w-full flex justify-center">
              <img
                src="/assets/escuela-example.jpg"
                className="max-w-full h-auto rounded-lg"
                alt="Nuevos Proyectos - Sección 2"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-stone-100 text-2xl xl:text-3xl 2xl:text-4xl mb-6 text-center">
              Sección 3
            </h2>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-center mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="w-full flex justify-center">
              <img
                src="/assets/escuela-example.jpg"
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