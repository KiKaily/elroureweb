
import React from "react";
import { Link } from "react-router-dom";

const Videos: React.FC = () => {
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center bg-[#DAD3C5] mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-handscript text-[#43362A] text-xl hover:text-opacity-80 transition-all duration-300"
        >
          ← Volver
        </Link>
        
        <h1 className="font-handscript text-[#43362A] text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center">
          Videos
        </h1>
        
        <div className="w-full max-w-[1000px] space-y-8">
          {/* YouTube Video 1 */}
          <div className="w-full">
            <div className="aspect-video w-full mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-handscript text-[#43362A] text-lg xl:text-xl text-center">
              Descripción del primer video de YouTube sobre nuestros fundamentos pedagógicos.
            </p>
          </div>

          {/* Vimeo Video */}
          <div className="w-full">
            <div className="aspect-video w-full mb-4">
              <iframe
                src="https://player.vimeo.com/video/148751763"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-handscript text-[#43362A] text-lg xl:text-xl text-center">
              Video de Vimeo mostrando nuestros métodos de enseñanza experiencial.
            </p>
          </div>

          {/* YouTube Video 2 */}
          <div className="w-full">
            <div className="aspect-video w-full mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-handscript text-[#43362A] text-lg xl:text-xl text-center">
              Testimonios de estudiantes sobre su experiencia en El Roure.
            </p>
          </div>

          {/* YouTube Video 3 */}
          <div className="w-full">
            <div className="aspect-video w-full mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-handscript text-[#43362A] text-lg xl:text-xl text-center">
              Recorrido por nuestras instalaciones y actividades diarias.
            </p>
          </div>

          {/* YouTube Video 4 */}
          <div className="w-full">
            <div className="aspect-video w-full mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-handscript text-[#43362A] text-lg xl:text-xl text-center">
              Presentación de nuestros proyectos de formación y asesoramiento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Videos;
