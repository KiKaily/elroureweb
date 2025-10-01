import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Fundamentos: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  }, [isMobile]);
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
        
        <h1 className="font-inter text-orange-700 text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in text-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Fundamentos
        </h1>
        
        <div className="w-full max-w-[900px] space-y-12">
          
          <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl 2xl:text-4xl text-center mb-8 text-glow">
              La autorregulación espontánea. El contacto con la naturaleza propia.
            </h2>

            <div className="w-full max-w-[600px] mx-auto mb-8">
            <img
              src="lovable-uploads/bego_cierre.png"
              className="w-full h-auto rounded-lg"
              alt="Ambiente educativo cálido"
            />
          </div>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El organismo humano, como cualquier otro organismo vivo, dispone de una gran capacidad esencial para la vida: satisfacer sus necesidades fundamentales. La principal necesidad es desarrollar el propio potencial.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Existe un diálogo entre la necesidad propia y el entorno, de modo que sea posible optar por lo más adecuado para mantener la vitalidad y hacer crecer el potencial interno.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La vitalidad es un movimiento entre la tensión y la distensión; de manera autónoma e involuntaria, el organismo se contrae y después busca la relajación. Así se autorregula.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El organismo forma una auténtica unidad con diferentes dimensiones: la físico-energética, emocional, mental y trascendente.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Existe un impulso vital íntimo e involuntario que regula la vida en nuestro organismo; este impulso ajusta instintivamente nuestras necesidades internas con la realidad externa que vamos viviendo. Para que este diálogo surja de una manera fluida, es necesario que nuestro organismo esté sensible y flexible, tanto a nivel físico como psíquico.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Cada uno de nosotros es único; tiene sus propias capacidades y dificultades, necesidades y prioridades, tiene una mirada, una forma de relacionarse, una manera de aprender, un ritmo vital particular. Todos tenemos capacidad intelectual, emocional y física, pero en cada cual, unas predominan sobre las otras. Es esta peculiar combinación de capacidades y sus matices lo que nos define como personas únicas; constituyen nuestra naturaleza peculiar.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Hay un impulso vital involuntario que indica a cada niña y niño qué necesita en cada momento y cómo moverse hacia ello. Es el que nos muestra si tenemos necesidad de llorar o de reír, de estar solos o acompañados, de comer o ayunar, de estar activos o pasivos, de compartir o defender lo nuestro, de emprender nuevos aprendizajes o consolidar otros, de interesarnos por nuevas amistades o buscar la compañía de los conocidos, etc. Es un impulso que incluye todo aquello físico y psíquico, y se expresa en múltiples lenguajes. Es el indicador de un mecanismo de autorregulación que nos permite mantener y cuidar nuestra vitalidad. En la medida que se da esa autorregulación y la satisfacción de las necesidades íntimas, la criatura se mantiene con capacidad para abordar con apertura y flexibilidad las situaciones que se presentan; la resolución de conflictos, la liberación de las tensiones acumuladas o la exploración de nuevos aprendizajes.
            </p>
          </section>

          

          <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl 2xl:text-4xl text-center mb-8 text-glow">
              El acompañamiento respetuoso; el marco necesario para el crecimiento.
            </h2>

            <div className="w-full max-w-[600px] mx-auto mb-8">
            <img
              src="lovable-uploads/bego_cierre.png"
              className="w-full h-auto rounded-lg"
              alt="Ambiente educativo cálido"
            />
          </div>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Los niños, niñas y adolescentes necesitan un marco de confianza, referencia y seguridad emocional de los adultos para poder ser felices y hacer crecer su potencial vital.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La relación entre los adultos y las niñas, niños o adolescentes, requiere presencia y disponibilidad. También un especial cuidado de la comunicación: saber escuchar y saber expresar nuestra sana autoridad como adultos.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La escucha, la libertad para decidir en los ámbitos de exploración y aprendizaje, el ambiente que fomente una conciencia de colectividad y los límites concretos y claros, a través de una intervención respetuosa dirigida a las verdaderas necesidades de la criatura.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El adulto es el encargado de tener cuidado del ambiente que rodea al niño para que pueda desarrollar su potencial interno. El lugar del adulto representa un espacio de veracidad en el que el niño se puede ver a si mismo y de esta manera crecer. Es el amor bien entendido, en toda su dimensión de aceptación incondicional, de acogimiento, lo que facilita el cambio ante la dificultad. Y es esta intensidad del amor lo que ofrece calor y verdadera riqueza a la relación. En esta relación entre el adulto y el infante, la verdadera clave es la auténtica comunicación; no es una comunicación entre iguales, sino entre el que cuida y el que es cuidado.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Este ambiente amoroso necesario para crecer que el adulto ofrece al niño tiene dos vertientes: la libertad para moverse según su impulso vital y sus intereses, y los límites, que le proporcionan la seguridad necesaria para hacerlo. El límite es una indicación que informa y señala hasta donde se puede llegar allá donde la criatura no tiene capacidad para hacerlo por sí mismo; estamos haciendo camino con el niño y este camino tiene una amplitud que determina la zona de libertad, que los adultos consideran segura y pertinente para el niño. Se da un proceso por el cual el límite va mostrando al infante lo que es necesario tener en cuenta dentro y fuera de sí mismo; así es como el límite contribuye a la maduración de manera que se pueda integrar esta consciencia de si mismo, de los otros y del mundo que le rodea.
            </p>
          </section>

          <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl 2xl:text-4xl text-center mb-8 text-glow">
              Cuidar el deseo innato de aprender.
            </h2>

            <div className="w-full max-w-[600px] mx-auto mb-8">
            <img
              src="lovable-uploads/bego_cierre.png"
              className="w-full h-auto rounded-lg"
              alt="Ambiente educativo cálido"
            />
          </div>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Como seres humanos disponemos de una inmensa capacidad innata de aprendizaje autónomo que se activa a través del diálogo permanente entre el deseo interno y el entorno y que es posible mantener a lo largo de toda la vida. Cada cual de nosotros tiene una manera y un ritmo de aprender que nos es propio, en comunicación permanente con nuestra naturaleza y nuestro momento vital. En El Roure es fundamental respetar y tener cura de este impulso interno en relación con un ambiente rico en situaciones y experiencias de aprendizaje.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El ser humano tiene la capacidad de construirse él mismo, de desarrollar el que ya es como potencial, de autorregular el intercambio con el entorno, es decir, de discernir aquello que es adecuado, el momento y la medida de un determinado aprendizaje. Esta capacidad se manifiesta desde el nacimiento y de forma innata como una gran curiosidad y ganas de aprender, que permite que los niños conquisten aprendizajes de gran complejidad de una manera autónoma. Esta capacidad es una cuestión de supervivencia, porque es la que surge del mismo hecho de crecer y de la necesidad de acoplamiento al entorno. Es por eso que es fundamental un ambiente rico y próximo, que cubra las necesidades del niño con posibilidades de vivencias diversas y rodeadas por el afecto incondicional.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure apoyamos a las ganas de autonomía que se manifiestan desde las primeras edades y que consideramos la vía natural, valiosa y eficaz que tienen las niñas y los niños para desarrollar sus capacidades. Este hecho comporta dejar un espacio para que encuentren sus soluciones en las situaciones que se los presentan, ya sea un conflicto en las relaciones, una caída, una dificultad en la experimentación, etc. Este hecho comporta también reconocer el valor del fracaso o de la frustración.
            </p>
            
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En todo caso nuestro papel como adultos no es el de evitar o solucionar problemas, sino el de acompañar las dificultades que puedan surgir porque las resuelvan con sus propios recursos; de este modo serán aprovechados para avanzar. Nuestro papel no pasa para dar respuestas cerradas y directas a sus preguntas, sino para servir de eco y de interlocutores para que surja y se construya una respuesta propia.
            </p>
          </section>
        </div>
        <div className="mb-20"></div>
      </section>
    </main>
  );
};

export default Fundamentos;