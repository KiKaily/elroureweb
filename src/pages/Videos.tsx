import React from "react";
import { Link } from "react-router-dom";

const Videos: React.FC = () => {
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-jacques text-stone-100 text-xl hover:text-opacity-80 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          ← Volver
        </Link>
        
        <h1 className="font-jacques text-stone-100 text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Videos
        </h1>

        <div className="w-full max-w-[1000px] space-y-8">
        
        
          <div className="w-full animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="aspect-video w-full mb-4">
              <iframe
                src="https://player.vimeo.com/video/115516270?color=ffffff&title=0&byline=0&portrait=0&badge=0&autoplay=1"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              El Roure, una escuela viva - Documental de Antonio Laforgia.</p>
              <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              "¿Es posible una escuela diferente a la de aulas grises, notas en el libro de escolaridad y nociones aprendidas de memoria tal como la 
              mayoría de nosotros la ha experimentado? ¿Y es posible imaginar una sociedad diferente a la actual sin reexaminar el modelo de educación en el que está basada?"</p>
          </div>

          <div className="w-full animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="aspect-video w-full mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wnhU8cmO1i0?si=2gSrOLPilGwC-Qij"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              Explorando la escuela El Roure, de Baobab.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              "En nuestra visita a El Roure, en la provincia de Barcelona, Begoña nos regaló esta entrevista/conversación donde de manera clara y profunda nos compartió su visión sobre la educación y el enfoque de la escuela. 
              Toda nuestra gratitud por acogernos y por la generosidad de compartir su experiencia y comprensión."
            </p>
          </div>

          <div className="w-full animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="aspect-video w-full mb-4">
              <iframe
                src="https://player.vimeo.com/video/1046320608?color=ffffff&title=0&byline=0&portrait=0&badge=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              Conversación del proyecto Ametxe con Begoña González. JolasBIDE 2024.</p>
              <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              "Entrevista a Begoña González, fundadora de la escuela viva El Roure de Cataluña, en su visita a Euskadi para el curso que se desarrolla entre las escuelas de Landabaso en Zalla (Bizkaia) y Bizilore en Azpeitia (Gipuzkoa). Entrevista realizada en el proyecto Ametxe, una comunidad generada en una vivienda cooperativa en cesión de uso en ámbito rural en Gordexola, Bizkaia. JolasBIDE 2024."</p>
          </div>

          <div className="w-full animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="aspect-video w-full mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XMepo_l0JC4?si=hMsYROm0cmMacuus"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              Conversación de Baobab con Begoña González.</p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl text-center mt-2 mb-16">
              "En nuestra visita a El Roure, en la provincia de Barcelona, Begoña nos regaló esta entrevista/conversación donde de manera clara y profunda nos compartió su visión sobre la educación y el enfoque de la escuela. 
              Toda nuestra gratitud por acogernos y por la generosidad de compartir su experiencia y comprensión."</p>
          </div>

        </div>
        <div className="mb-20"></div>
      </section>
    </main>
  );
};

export default Videos;