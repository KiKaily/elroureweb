
import React from "react";
import { Link } from "react-router-dom";

const Textos: React.FC = () => {
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-handscript text-[#43362A] text-xl hover:text-opacity-80 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          ← Volver
        </Link>
        
        <h1 className="font-handscript text-[#43362A] text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Textos
        </h1>
        
        <div className="w-full max-w-[800px]">
          <ul className="space-y-8">
            <li className="border-l-4 border-[#43362A] pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-[#43362A]/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-handscript text-[#43362A] text-2xl xl:text-3xl font-bold mb-2">
                  La Pedagogía Experiencial en El Roure
                </h2>
                <h3 className="font-handscript text-[#43362A] text-lg xl:text-xl italic mb-2">
                  Un enfoque holístico para el aprendizaje significativo
                </h3>
                <p className="font-handscript text-[#43362A] text-base xl:text-lg">
                  Por María González, Directora Pedagógica
                </p>
              </Link>
            </li>

            <li className="border-l-4 border-[#43362A] pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-[#43362A]/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-handscript text-[#43362A] text-2xl xl:text-3xl font-bold mb-2">
                  El Aprendizaje a Través de la Naturaleza
                </h2>
                <h3 className="font-handscript text-[#43362A] text-lg xl:text-xl italic mb-2">
                  Conectando con el entorno para un desarrollo integral
                </h3>
                <p className="font-handscript text-[#43362A] text-base xl:text-lg">
                  Por Josep Martínez, Coordinador de Actividades
                </p>
              </Link>
            </li>

            <li className="border-l-4 border-[#43362A] pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-[#43362A]/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-handscript text-[#43362A] text-2xl xl:text-3xl font-bold mb-2">
                  Formación de Educadores del Siglo XXI
                </h2>
                <h3 className="font-handscript text-[#43362A] text-lg xl:text-xl italic mb-2">
                  Herramientas y metodologías para una educación transformadora
                </h3>
                <p className="font-handscript text-[#43362A] text-base xl:text-lg">
                  Por Ana Pérez, Formadora Senior
                </p>
              </Link>
            </li>

            <li className="border-l-4 border-[#43362A] pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-[#43362A]/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-handscript text-[#43362A] text-2xl xl:text-3xl font-bold mb-2">
                  La Importancia del Juego en el Aprendizaje
                </h2>
                <h3 className="font-handscript text-[#43362A] text-lg xl:text-xl italic mb-2">
                  Cuando aprender es divertido, el conocimiento se vuelve duradero
                </h3>
                <p className="font-handscript text-[#43362A] text-base xl:text-lg">
                  Por Carlos Ruiz, Especialista en Ludopedagogía
                </p>
              </Link>
            </li>

            <li className="border-l-4 border-[#43362A] pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-[#43362A]/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-handscript text-[#43362A] text-2xl xl:text-3xl font-bold mb-2">
                  Asesoramiento Pedagógico Personalizado
                </h2>
                <h3 className="font-handscript text-[#43362A] text-lg xl:text-xl italic mb-2">
                  Adaptando metodologías a cada contexto educativo
                </h3>
                <p className="font-handscript text-[#43362A] text-base xl:text-lg">
                  Por Laura Vidal, Consultora Educativa
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-20"></div>
      </section>
    </main>
  );
};

export default Textos;
