
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import BackToTop from "@/components/roure/BackToTop";

const Historia: React.FC = () => {
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
        
        <h1 className="font-inter text-orange-700 text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in text-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Historia
        </h1>
        
        <div className="w-full max-w-[900px] space-y-8">
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify animate-fade-in"
             style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            La escuela El Roure nació en 2001 en una finca rústica del municipio de Mediona (Barcelona). La fundamos Begoña González y Cristóbal Gutiérrez, como un paso más en la evolución de la experiencia en La Casita, que fundamos en 1996, en Barcelona.
          </p>
          
          <div className="w-full max-w-[600px] mx-auto mb-8 animate-fade-in"
               style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <img
              src="/lovable-uploads/bego_cierre.webp"
              className="w-full h-auto rounded-lg"
              alt="Naturaleza - Ubicación de la escuela"
            />
          </div>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify animate-fade-in"
             style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            La llamamos escuela viva El Roure. Sus raíces son la experiencia de crianza, el Seitai y la Sistémica y algunas inspiraciones de pedagogías innovadoras del s. XX (Montessori, Freinet, Neill, Malaguzzi, etc.). La línea pedagógica se fue concretando y desarrollando a través de la práctica cotidiana con los niños y niñas, con las madres y padres, en la relación de equipo. A partir de muchas preguntas, la observación y la reflexión, algunos criterios se fueron clarificando y confirmando. El proceso de descubrimiento y aprendizaje ha seguido hasta el final.</p>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify animate-fade-in"
             style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            El apoyo, la confianza y la implicación de las primeras familias y miembros del equipo fueron decisivos.
          </p>
          
          <div className="w-full max-w-[600px] mx-auto mb-8 animate-fade-in"
               style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <img
              src="/lovable-uploads/bego_cierre.png"
              className="w-full h-auto rounded-lg"
              alt="Comunidad - Crecimiento conjunto"
            />
          </div>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            La semilla de El Roure encontró las condiciones más favorables para germinar y crecer. Una persona cercana hizo de mecenas ofreciéndose a comprar la preciosa finca que elegimos para ubicar el proyecto. Empezamos con 6 criaturas que venían desde Barcelona y se quedaban a dormir en la masía tres días a la semana. Poco a poco el grupo fue creciendo y las familias participantes realizaron todo un cambio de vida trasladándose a la zona. Estas primeras familias se entregaron en cuerpo y alma a la reforma de las edificaciones e implicaron a familiares y amigos.</p>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            Fue una época de trabajo exhausto, tanto en la reforma y adecuación del espacio y en la preparación de materiales educativos como en la reflexión y evolución de la metodología, la organización y la explicación de la línea educativa que estábamos creando.</p>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            Como todo comienzo, se vivió en un ambiente de ilusión y de implicación muy intenso entre el equipo, familias, amigos y profesionales que colaboraban de forma desinteresada. Compartimos sudor entre cemento, escombros y pintura, horas de cocina, tertulias pedagógicas en sobremesas de grupo, sueños, incertidumbres y mucha confianza. Fueron tiempos de carencias económicas y dificultades constantes, en las que no existían las vacaciones…y nos empujaba una fuerza inmensa.</p>

          <div className="w-full max-w-[600px] mx-auto mb-8">
            <img
              src="/lovable-uploads/bego_cierre.png"
              className="w-full h-auto rounded-lg"
              alt="Educación innovadora"
            />
          </div>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            En el 2009 pasamos de asociación a cooperativa de trabajo sin ánimo de lucro: Experiència educativa El Roure SCCL.
          </p>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            En ese momento también ampliamos nuestra presencia en el panorama educativo, compartiendo con más frecuencia nuestra experiencia a través de charlas, artículos en publicaciones educativas, colaboraciones en formaciones, y además comenzamos a ofrecer nuestras propias formaciones y acompañamientos a familias y profesionales.
          </p>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            La escuela creció hasta llegar a acoger a 90 niñas, niños y adolescentes. Siempre tuvimos vocación de escuela pequeña, para poder hacer el trabajo con la profundidad que queríamos y esa dimensión se convirtió en el límite. 


          </p>
          
          <div className="w-full max-w-[600px] mx-auto mb-8">
            <img
              src="/lovable-uploads/bego_cierre.png"
              className="w-full h-auto rounded-lg"
              alt="Ambiente educativo cálido"
            />
          </div>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            En 2017, tras un enorme esfuerzo económico y organizativo por parte de toda la comunidad (que incluyó un micromecenazgo impulsado por las familias), conseguimos la autorización como escuela de primaria, por parte del Departament d’Educació de la Generalitat de Catalunya.
          </p>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
            Después del confinamiento por el coronavirus del 2020, la escuela fue decreciendo. El mundo era otro al de los inicios; las familias tendían más a la escolarización pública gratuita y cercana a su vivienda, las escuelas públicas habían ido paulatinamente abriéndose hacia la creación de ambientes con materiales manipulativos y la llamada “libre circulación”, etc.
          </p>
          
          <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
           A raíz de serias dificultades en la finca, la disminución del número de familias y la falta de relevo en la coordinación de la escuela, decidimos el cierre.
        </p>
        </div>
        <div className="mb-20"></div>
      </section>
    </main>
  );
};

export default Historia;
