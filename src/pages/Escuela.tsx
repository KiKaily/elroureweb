import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Escuela: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  }, [isMobile]);
  const [activeSection, setActiveSection] = useState<string>("intro");

  const menuItems = [
    { id: "intro", title: "Introducción" },
    { id: "aprendizaje", title: "Aprendizaje" },
    { id: "que-aprenden", title: "¿Qué aprenden?" },
    { id: "como-aprenden", title: "¿Cómo aprenden?" },
    { id: "actividades", title: "Actividades" },
    { id: "acompanamiento", title: "Acompañamiento" },
    { id: "equipo", title: "El equipo" },
    { id: "familias", title: "Las familias" },
    { id: "ninos", title: "Los niños y niñas" },
    { id: "etapas", title: "Etapas y espacios" },
    { id: "cerezos", title: "De 3 a 6 años" },
    { id: "ginesta", title: "De 6 a 12 años" }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Introducción</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La escuela El Roure nació en 2001, con el concepto de escuela viva.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Es una comunidad de aprendizaje unida por una visión de la educación inspirada por Seitai, la Sistémica y la experiencia cotidiana entre familias, profesionales y criaturas. El propósito es acompañar a las criaturas en su crecimiento ya las madres y padres en su función.
            </p>
            <img src="/public/assets/oak-tree-rings-texture.jpg" alt="Introducción a la escuela" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "aprendizaje":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Aprendizaje</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Inicialmente el aprendizaje es una dinámica vital ineludible; se trata del proceso de integración de nuevas comprensiones destinadas a evolucionar la vida de nuestro organismo. De forma natural siempre estamos aprendiendo y aprendemos de una manera global e interrelacionando nuestras dimensiones: la física-energética, la emocional, el intelectual.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Buscamos una experiencia de aprendizaje sólida, arraigada, viva. Para que esto se dé, el proceso debe tener como eje el deseo y la necesidad propia, el respeto al ritmo propio y recorrido, la posibilidad de contactar con lo que me atrae de forma intuitiva e involuntaria, con lo que quiero o me interesa conscientemente y poder avanzar con autonomía hacia esto.
            </p>
            <img src="/public/lovable-uploads/intrincados-anillos-tronco-arbol-cuentan-historia-edad-calido-centro-rojizo_91128-4619.webp" alt="Aprendizaje natural" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "que-aprenden":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">¿Qué aprenden?</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Cuando se habla de aprendizaje, a menudo se limita este concepto al aprendizaje de conocimientos. Incluso suele quedar aún más reducido al entender que se refiere a los conocimientos intelectuales. El aprendizaje, por el contrario, es un concepto ilimitado; no sólo porque es imposible dejar de aprender mientras existe vida, sino porque los objetos del aprendizaje son infinitos.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Cada niño y niña debe aprender a andar, a hablar, a tolerar la frustración, a tener en cuenta a los demás, a entenderse, a conocer el lenguaje de las emociones, a expresarse de forma que permita la comunicación, a conocer su cultura y la de los demás, en conocer su cuerpo y sus capacidades, en elaborar pensamientos propios, etc.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure no existe el currículum ni las programaciones sobre los contenidos de los aprendizajes; en todo caso, existen recursos, materiales, espacios, situaciones y posibilidades en continuo movimiento y el propósito de que el abanico de todo lo que acontece sea lo más completo posible dentro de lo que creemos conveniente para las niñas y los niños en estas edades.
            </p>
            <img src="/src/assets/recycled-paper-texture.jpg" alt="Recursos de aprendizaje" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "como-aprenden":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">¿Cómo aprenden?</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El aprendizaje no es un proceso lineal, progresivo, rítmico y aseado; tampoco debe estar ligado continuamente a la conciencia; está más bien ligado al bienestar vital y, consecuentemente, al ambiente, a la calidad de la vivencia y la comunicación.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Creemos que es urgente desterrar la idea de entrenamiento, del valor de lo cuantitativo en relación con el aprendizaje. En la práctica, hacer con sentido (leer, escribir, hablar, moverse, relacionarse, crear...) significa que todo el organismo está activo, implicado en la vivencia, y eso es lo que permite que el aprendizaje entre y sedimente.
            </p>
            <img src="/public/lovable-uploads/517a4352-7aae-4e38-a7f8-23577996fbf6.png" alt="Proceso de aprendizaje" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "actividades":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Actividades</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure, los niños y niñas se mueven constantemente, de forma fluida y voluntaria entre dos experiencias de aprendizaje y relación: la actividad autónoma y la actividad con mediación del adulto.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La actividad autónoma y espontánea es la natural y necesaria durante toda la infancia. Es a través de esta actividad que el niño busca y encuentra lo necesario para su bienestar más íntimo, según una sensible guía innata.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En el desarrollo de una actividad estructurada en la que ocurre la relación con el adulto, los niños y las niñas descubren una dimensión diferente; pueden asomarse con él para ver aspectos de la cultura adaptados a su mirada.
            </p>
            <img src="/public/lovable-uploads/a2a0306c-1588-4029-bd68-eadc52824cbe.webp" alt="Actividades escolares" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "acompanamiento":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Acompañamiento</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El Roure es un espacio de encuentro y acompañamiento entre familias y equipo pedagógico en torno a la experiencia de la crianza infantil.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Este acompañamiento tiene dos vertientes: por un lado, un ambiente respetuoso y rico en vivencias para las niñas y los niños en un contexto colectivo y, por otro, una comunicación con madres y padres que invite a la observación, la percepción sensible y la reflexión para apoyar y enriquecer la experiencia de crianza de los hijos e hijas.
            </p>
            <img src="/public/lovable-uploads/bego_cierre.png" alt="Acompañamiento familiar" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "equipo":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">El equipo</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En el equipo, reconocemos que las familias depositan una gran confianza en nuestra tarea, por el hecho de dejar a los hijos e hijas en nuestras manos. Recogemos esta responsabilidad, aceptamos que somos acompañantes secundarios y que les aportamos algo que complementa la función de madres y padres.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Una parte de nuestra labor está relacionada con los niños y niñas. Las personas que formamos el equipo pedagógico nos proponemos desarrollar nuestra sensibilidad hacia la escucha, la observación y la percepción, así como la capacidad de analizar, interpretar y reflexionar sobre lo que cada niño y niña manifiestan.
            </p>
            <img src="/public/lovable-uploads/test.png" alt="Equipo pedagógico" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "familias":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Las familias</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Cada niña y cada niño se mantiene en pie sobre los pilares de su familia, de donde nace su entereza, la referencia, la mirada y la seguridad necesarios para crecer. La madre y el padre representan el eje vital en la infancia y es el vínculo de amor entre los miembros de la familia lo que permite que el niño o la niña vivan y se desarrollen.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Por eso consideramos que las madres y padres sois los primeros y principales responsables del acompañamiento durante el crecimiento.
            </p>
            <img src="/src/assets/escuela-example.jpg" alt="Las familias" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "ninos":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Los niños y niñas</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Hay un eje y una dirección en el camino de búsqueda de nuestra experiencia de acompañamiento: cuidar la esencia del espíritu infantil. La mirada original de los niños está iluminada por el deseo de ser y aprender; pide un amplio margen de autonomía y una estrecha relación con los adultos.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El verdadero aprendizaje se da a partir del impulso de cada niño y es el fruto del diálogo continuado entre su interior y el exterior.
            </p>
            <img src="/src/assets/oak-tree-rings-texture.jpg" alt="Los niños y niñas" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "etapas":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Etapas y espacios</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure tenemos dos etapas diferenciadas y en relación: Los Cerezos, para niños y niñas entre 3 y 6 años y La Ginesta y La Arbreda, para niñas y niños entre 7 y 12 años.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Consideramos que cada etapa requiere un espacio y un ambiente propios, pero encontramos enriquecedora la convivencia de edades. Por eso favorecemos formas y situaciones de intercambio entre los tres grupos.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El espacio es el elemento que acoge la experiencia pero, al mismo tiempo, es uno de los elementos que conforma y determina la experiencia.
            </p>
            <img src="/src/assets/recycled-paper-texture.jpg" alt="Etapas y espacios" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "cerezos":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">De 3 a 6 años; Cirerers</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El aprendizaje a estas edades se produce haciendo experimentar todos los sentidos corporales con el medio y esto lleva a manipular materiales y objetos concretos. Las niñas y niños más pequeños exploran constantemente de una manera global y enormemente eficaz.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure, entre los 3 y 6 años la actividad básica es totalmente espontánea. Los diferentes materiales están al alcance de los niños y niñas para ser empleados en los espacios destinados a ellos: rincones de juego simbólico, de construcciones, de matemáticas y de lectoescritura, sala de movimiento y música, talleres de plástica, arenal.
            </p>
            <img src="/public/assets/fondo_web_mobile.webp" alt="De 3 a 6 años" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "ginesta":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">De 6 a 12 años; Ginesta y Arbreda</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Empieza una etapa en la que los niños y niñas ya empiezan a estar preparados para iniciar el camino de un aprendizaje más abstracto. Se empieza a hacer consciente el deseo de aprender y puede enfocarlo voluntariamente en una dirección determinada.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La actividad autónoma sigue siendo fundamental y se desarrolla en los diferentes espacios disponibles: la biblioteca (con rincones de geografía y culturas, matemáticas, juegos de mesa, lenguas), la sala de música y movimiento, el taller de plástica, el taller de naturaleza y el espacio exterior.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La actividad estructurada tiene un papel importante en esta etapa. Los niños están cada vez más interesados ​​en actividades más abstractas, organizadas, estructuradas y vinculadas al adulto y al grupo.
            </p>
            <img src="/public/assets/fondo_web_desktop.webp" alt="De 6 a 12 años" className="w-full rounded-lg mt-4" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1400px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-inter text-stone-100 text-xl hover:text-opacity-80 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          ← Volver
        </Link>
        
        <h1 className="font-inter text-orange-700 text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in text-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Escuela
        </h1>
        
        <div className="w-full max-w-[800px] mb-8 animate-fade-in"
             style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <img
            src="/src/assets/escuela-example.jpg"
            className="w-full h-auto rounded-lg"
            alt="Escuela"
          />
        </div>
        
        <div className="w-full flex flex-col lg:flex-row gap-8 animate-fade-in"
             style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          {/* Submenu */}
          <div className="lg:w-1/4 w-full">
            <div className="bg-white/20 rounded-lg p-4 sticky top-4">
              <h2 className="font-inter text-stone-100 text-xl mb-4">Secciones</h2>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-all duration-300 font-inter ${
                      activeSection === item.id
                        ? 'bg-stone-100 text-stone-800'
                        : 'text-stone-100 hover:bg-white/30'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-3/4 w-full">
            <div className="bg-white/10 rounded-lg p-6">
              {renderContent()}
            </div>
          </div>
        </div>
        <div className="mb-20"></div>
      </section>
    </main>
  );
};

export default Escuela;