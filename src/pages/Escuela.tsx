import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import BackToTop from "@/components/roure/BackToTop";

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
              Ha sido una comunidad de aprendizaje unida por una visión de la educación inspirada por el Seitai, la Sistémica y la experiencia cotidiana entre familias, profesionales y criaturas. El propósito fue acompañar a las criaturas en su crecimiento y a las madres y padres en su función.
            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="Introducción a la escuela" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "aprendizaje":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Aprendizaje</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El aprendizaje es una experiencia vital ineludible porque es la dinámica de desarrollo del potencial particular que cada criatura. De forma natural siempre estamos aprendiendo, en todo lugar y momento y de una manera global, con todo nuestro organismo implicado; nuestra capacidad
              física-energética, emocional, intelectual y trascendente.            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El verdadero aprendizaje se da a partir del impulso vital de cada niño y es el fruto del diálogo continuado entre su interior y el exterior. Aunque es una dinámica intrínseca al hecho de estar vivos, puede ser favorecida y alimentada o dificultada y dormida.            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure hemos buscado una experiencia de aprendizaje sólida, arraigada, viva. Para que se dé ese nivel de aprendizaje, el proceso debe tener como eje el deseo y la necesidad propia y el respeto al ritmo y recorrido peculiares de cada cual.            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="Aprendizaje natural" className="w-full rounded-lg mt-4" />
          
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Esos procesos individuales estaban enmarcados en un contexto amplio, en el que tratamos de acompañar la globalidad del crecimiento de cada criatura sin sobrevalorar ningún aspecto sobre otro: su mundo emocional, sus aprendizajes culturales, su capacidad de reflexión, de expresión y comunicación con los otros, la conciencia de sí mismos, su desarrollo motriz, su creatividad, etc.          
          </p>
<p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Consideramos artificial y limitadora la separación entre familia y escuela. El aprendizaje se da de forma contínua y sus contenidos forman parte de un único proceso en el que todo está conectado. Por eso proponíamos que la madre y el padre asuman el derecho y la responsabilidad básica en este acompañamiento, en lugar de la actitud de delegar en los profesionales de la educación y en la escuela una parte fundamental de su función. El Roure era un espacio pedagógico cotidiano en el que madres y padres querían y podían participar. La relación entre casa y escuela se trataba de favorecer a través de actividades llevadas por madres, padres y otros adultos afines o donde los materiales o procesos de aprendizaje iban y venían de un lugar a otro.               
          </p>
          </div>
        );
      case "que-aprenden":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">¿Qué aprenden los niños y niñas?</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Cuando se habla de aprendizaje, a menudo se limita este concepto al aprendizaje de conocimientos. Incluso suele quedar aún más reducido al entender que se refiere a los conocimientos intelectuales. El aprendizaje, por el contrario, es una experiencia ilimitada; no sólo porque es imposible dejar de aprender mientras existe vida, sino porque los objetos del aprendizaje son infinitos.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Cada niño y niña debe aprender a andar, a hablar, a tolerar la frustración, a tener en cuenta a los demás, a entenderse, a conocer el lenguaje de las emociones, a conocer su cultura y la de los demás, a conocer su cuerpo y sus capacidades, a elaborar pensamientos propios, etc. Es todo el ser el que aprende y los aprendizajes no están parcelados ni aislados unos de otros. En el aprender todo el organismo está implicado: el aspecto físico al actuar y percibir el propio cuerpo, el emocional al sentir y relacionarse, el intelectual al asimilar información y procesarla, forman parte de un todo indisociable.
            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="Proceso de aprendizaje" className="w-full rounded-lg mt-4" />
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure todo ha estado al servicio del aprendizaje a partir de las realidades individuales y grupales que se iban dando. Hemos contemplado un currículum abierto, dinámico y flexible, materiales, espacios, actividades, metodologías, situaciones y posibilidades en continuo movimiento.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Posiblemente, uno de los aprendizajes más interesantes que se han podido llevar los niños y niñas (y madres y padres) es que el presente genera continuamente posibilidades de aprendizaje realmente interesantes y valiosas. Si respetamos este continuo y poderoso devenir, los aprendizajes tendrán el valor y la intensidad de lo que está vivo.
            </p>
          </div>
        );
      case "como-aprenden":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">¿Cómo aprenden los niños?</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              El aprendizaje no es un proceso lineal, progresivo y rítmico, tampoco está ligado continuamente a la consciencia. Está más bien ligado al bienestar vital y, consecuentemente, al ambiente, a la calidad de la vivencia y la comunicación. Por este motivo, es posible observar tanto recorridos con carácter constante y gradual, como repentinos y con avances sorprendentes. De una forma u otra, estamos convencidos de que lo que determina la solidez de lo aprendido no es el tiempo invertido, la hipotética adecuación del contenido a la edad, ni siquiera la metodología escogida. Nuestra atención no puede centrarse en programaciones cerradas y tiempos predeterminados, sino en actividades abiertas y flexibles que se adaptan a las necesidades de cada criatura.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Creemos que es urgente desterrar la idea de entrenamiento, del valor de lo cuantitativo en el aprendizaje. En la práctica, hacer con sentido (leer, escribir, hablar, moverse, relacionarse, crear, etc.) significa que todo el organismo está activo, implicado en la vivencia, y eso es lo que permite que el aprendizaje sedimente. Todas las capacidades intelectuales, la afectividad, la creatividad, la imaginación, los sentidos, etc., están participando, y esta implicación es lo que permite asimilar, privilegiar en la memoria, asociar con otros aprendizajes, y transformarse, crecer.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              Ofrecer la posibilidad a los niños y niñas de seguir su impulso vital y explorar, no es sólo priorizar su bienestar, sino también apostar por una relación de amistad con el aprendizaje.
            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="Actividades escolares" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "actividades":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Actividad autónoma y actividad estructurada</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              En El Roure, los niños y niñas se han movido constantemente, de forma fluida y voluntaria entre dos experiencias de aprendizaje y relación: la actividad autónoma y la actividad estructurada.
            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La actividad autónoma y espontánea es la natural y necesaria durante toda la infancia. Es a través de esta actividad que el niño busca y encuentra lo necesario para su bienestar más íntimo, según una sensible guía innata. A lo largo de toda la infancia, esta actividad consiste principalmente en el juego, que es la vía de la experimentación imprescindible para el aprendizaje, es decir, para la comprensión de sí mismo en el mundo que le rodea.
            </p>
            <img src="/public/lovable-uploads/bego_cierre.png" alt="Acompañamiento familiar" className="w-full rounded-lg mt-4" />
             <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
              La actividad estructurada es la que el equipo educativo prepara y ofrece en función de los contenidos curriculares y de lo que considera necesario en cada momento para el grupo. Las niñas y niños descubren así aspectos de la cultura adaptados a su mirada, se les pueden presentar nuevos interrogantes y descubrimientos a los que, sin esta mediación, no podrían tener acceso. En esta relación, el adulto abre nuevos horizontes y acompaña en la aventura de una nueva incursión investigadora.
            </p>
            <img src="/public/lovable-uploads/bego_cierre.png" alt="Acompañamiento familiar" className="w-full rounded-lg mt-4" />

          </div>
        );
      case "acompañamiento":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Acompañamiento</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
                Hay un eje y una dirección en el camino de búsqueda de nuestra experiencia de acompañamiento: cuidar la esencia del espíritu infantil. La mirada original de los niños está iluminada por el deseo de ser y aprender; eso pide un amplio margen de autonomía y una estrecha relación con los adultos.            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
                El Roure ha sido un espacio de encuentro y acompañamiento entre familias y equipo pedagógico en torno a la experiencia de la crianza infantil. 
                </p>
                <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
                 
                Este acompañamiento tiene dos vertientes: por un lado, el acompañamiento a niños y niñas en un ambiente respetuoso y rico en vivencias individuales y colectivas. Por otro lado, un acompañamiento a madres y padres que invite a la observación, la percepción sensible y la reflexión, para apoyar y enriquecer la experiencia de crianza de los hijos e hijas.            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="Equipo pedagógico" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "equipo":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">El equipo</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
En el equipo, siempre hemos reconocido que las familias depositan una gran confianza en nuestra tarea, simplemente por el hecho de dejar a los hijos e hijas a nuestro cargo. Recogimos esa responsabilidad, aceptando que somos acompañantes secundarios y que les aportamos algo que complementa la función de madres y padres.            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Las personas que formamos el equipo pedagógico nos propusimos desarrollar nuestra sensibilidad hacia la escucha, la observación y la percepción, así como la capacidad de analizar, interpretar y reflexionar sobre lo que cada niño y niña manifiestan. Necesitamos tener iniciativa propia para reaccionar y responder en cada momento y situación con una determinada intervención con cada niño y niña. Nuestra función incluía el soporte y el acompañamiento, tanto a nivel afectivo como en la búsqueda de nuevas posibilidades de aprendizaje. Constituimos un referente continuo que siempre debía saber dejar espacio para la autonomía, en todos los aspectos. También se daba un espacio en el que las diferentes miradas de cada miembro del equipo establecían un diálogo intenso y vivo.            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
La otra parte de la labor del equipo pedagógico era la aportación a madres y padres de nuestra visión de los hijos e hijas, y de su acompañamiento en cada momento del proceso de crecimiento. Partimos de la base de que es posible un diálogo activo, compartiendo informaciones, percepciones, interpretaciones y reflexiones, que no pretendían llegar a respuestas cerradas sino a claves para continuar el camino.            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="Las familias" className="w-full rounded-lg mt-4" />
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
            <img src="/lovable-uploads/bego_cierre.png" alt="Los niños y niñas" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "familias":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Las familias</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Cada niña y cada niño se sostiene sobre su familia, de donde nace su confianza, seguridad y  referencia necesarias para crecer. La madre y el padre representan el eje vital en la infancia y es el vínculo de amor entre los miembros de la familia lo que permite que el niño o la niña vivan y se desarrollen de forma sana. Por eso consideramos que las madres y padres son los primeros y principales responsables del acompañamiento durante el crecimiento.            </p>
            
            <img src="/lovable-uploads/bego_cierre.png" alt="Etapas y espacios" className="w-full rounded-lg mt-4" />
          </div>
        );
      case "etapas-tiempos-espacios":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">Etapas, tiempos y espacios</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
En El Roure teníamos dos etapas diferenciadas y en relación: Els Cirerers (Los Cerezos), para niños y niñas entre 3 y 6 años y La Ginesta y La Arbreda (La Arboleda), para niñas y niños entre 7 y 12 años. También tuvimos, durante unos años, un grupo de 13 a 16 años en lo que llamamos L’Heura (La Hiedra).            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Consideramos que cada etapa requiere un espacio y un ambiente propios, pero encontramos enriquecedora la convivencia de edades. Por eso favorecemos formas y situaciones de intercambio entre los grupos.            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="De 3 a 6 años" className="w-full rounded-lg mt-4" />
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Entre el final de una etapa y el comienzo de la siguiente había un tiempo de transición flexible que permitía conocer el ambiente y el grupo de la nueva etapa y hacerse consciente del cambio. Tanto al entrar a la escuela como al cambiar de etapa o al marchar de ella, celebrábamos rituales de paso.  </p>          
<p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
La organización del tiempo era simple y flexible, en la que los diferentes elementos se combinaban en proporciones diferentes en cada etapa: actividad autónoma y estructurada, almuerzo colectivo, recogida de espacios y reunión grupal diarias al final del día.</p>
            <img src="/lovable-uploads/bego_cierre.png" alt="De 3 a 6 años" className="w-full rounded-lg mt-4" />
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Tanto el espacio interior como el exterior de cada etapa eran habitados libremente como espacios de aprendizaje y exploración. El espacio exterior nos venía dado por una finca extensa rodeada de bosque en un entorno rural; la fauna y la flora y el ecosistema natural ofrecían continuamente ocasiones para el asombro y la investigación. Los espacios interiores estaban preparados en función de los diferentes tipos de actividad: una sala motriz y polivalente, una zona con rincones con materiales de matemáticas, geografía e historia, biblioteca, lenguas, medio natural, un taller de plástica y carpintería, una sala de música, etc. Tanto el espacio exterior como interior estaban interrelacionados y cubren necesidades diversas indistintamente: intimidad, sociabilidad, actividad, contemplación, concentración, expansión, etc. Ambos eran fuente interminable de vivencias de aprendizaje, cada rincón respiraba y conservaba huellas de emociones y descubrimientos.</p>
          </div>
        );
      case "etapa-3-6":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">De 3 a 6 años. Els Cirerers</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Las niñas y niños más pequeños exploran constantemente de una manera global y enormemente eficaz. En esta etapa es especialmente relevante el vínculo afectivo con el adulto, la experimentación a través del juego sensorial, psicomotriz y simbólico, por eso la experimentación corporal, la manipulación de materiales y objetos concretos, los cuentos y el juego simbólico son fundamentales.            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Cualquiera de sus actividades lúdicas, de relación, de expresión, de motricidad, lleva implícita una gran cantidad y variedad de aprendizajes: cuando un niño juega en el arenero traspasando agua de un recipiente a otro y la mezcla con la arena para hacer una pasta; cuando construye torres con piezas de madera o circuitos con rampas, rectas y desniveles para hacer pasar pelotas; cuando estira la cuerda de una carretilla vacía, primero, y después con dos amigos que se han encaramado y comprueba la diferencia, está comprendiendo vivencialmente leyes de la física, lo que le permitirá comprenderlas posteriormente de manera intelectual ; cuando un niño busca la medida conveniente de un palo para su cabaña, probando ahora uno y ahora otro; cuando trata de hacer pedazos iguales de un pastel de cumpleaños o reparte balas para un juego; cuando encuentra formas geométricas en cualquier objeto; cuando se pregunta por el transcurso del tiempo o compara las distancias recorridas en dos viajes, está entrando en el pensamiento lógico-matemático. Cuando hace garabatos en un papel imitando la escritura de los adultos, mira atentamente las letras impresas en un cuento, describe verbalmente lo que ve en una ilustración, ya está inmerso en el aprendizaje de la lectoescritura.            </p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
La actividad básica en esta etapa era totalmente espontánea. Los diferentes materiales están al alcance de los niños y niñas para ser empleados en los espacios destinados a ellos: rincones de juego simbólico, de construcciones, de matemáticas y de lectoescritura, sala de movimiento y música, talleres de plástica y ciencias naturales, arenero exterior, etc. Existía, además, una programación interna del equipo con la que cada día de la semana se proponía una actividad estructurada acompañada por un adulto en relación con diferentes campos del aprendizaje: las matemáticas, la lectoescritura, la plástica, la música, el juego simbólico y la psicomotricidad, la naturaleza, etc. Estas propuestas eran voluntarias y flexibles en el tiempo en función del interés grupal. Por otra parte, cada día solían aparecer de forma natural e improvisada numerosas situaciones de aprendizaje que el adulto nutría con conversaciones o materiales.            </p>
            <img src="/lovable-uploads/bego_cierre.png" alt="De 6 a 12 años" className="w-full rounded-lg mt-4" />
          </div>
        );

        case "etapa-6-12":
        return (
          <div className="space-y-6">
            <h3 className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl text-glow">De 6 a 12 años. La Ginesta y La Arbreda</h3>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Empieza una etapa en la que los niños y niñas ya empiezan a estar preparados para iniciar el camino de un aprendizaje más abstracto. Se empieza a hacer consciente el deseo de aprender y se puede enfocarlo voluntariamente en una dirección determinada. Se van interesando más por los conocimientos relacionados con el mundo adulto y va creciendo la capacidad y el interés por las actividades en grupo. De hecho, ensayan formas de relación y organización de grupo que les permiten crear sus propias normas sociales como comienzo de una preparación en la entrada del mundo adulto que se extenderá e intensificará en la adolescencia.</p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
La actividad autónoma sigue siendo fundamental y se desarrolla en los diferentes espacios disponibles. La actividad estructurada tiene un papel más importante en esta etapa. Los niños están cada vez más interesados ​​en actividades más abstractas, organizadas, estructuradas y vinculadas al adulto y al grupo. A partir de esa edad hemos establecido una estructura de actividades visible y voluntaria con la mediación del adulto.</p>
            
            <img src="/lovable-uploads/bego_cierre.png" alt="De 6 a 12 años" className="w-full rounded-lg mt-4" />

            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Entendemos que existen diversas formas de desarrollar un aprendizaje estructurado y se trata de ofrecer puntos de partida para que cada niño y niña pueda moverse en esta diversidad según su particular sensibilidad y naturaleza. Por eso existen formas individuales o de grupo, autónomas o acompañadas por los adultos, concretas o abstractas, temáticas o interdisciplinarias, etc. El objetivo de la actividad estructurada es abrir nuevos horizontes, mostrar nuevas experiencias y posibilidades de aprendizaje en un contexto de grupo. Son de carácter vivencial, se desarrollan mediante una metodología lúdica ya menudo interdisciplinar y tratan de recorrer el amplio abanico de aspectos de la cultura.</p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
Hay niños y niñas con necesidades de un acompañamiento más cercano y continuado o cualquiera, puede tener momentos puntuales de dificultad, rechazo, resistencia o bloqueo en relación con cualquier tipo de aprendizaje.</p>
            <p className="font-montserrat text-stone-100 text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
En esos casos establecemos un proceso de observación, seguimiento y acompañamiento más cercano de lo habitual, para determinar el grado de intervención conveniente, con el objetivo de abordar y resolver esta dificultad en concreto. De esta forma, favorecemos que estos niños y niñas encuentren la posibilidad de resolver su conflicto a través de un marco mediado por el adulto.</p>
            <img src="/lovable-uploads/bego_cierre.png" alt="De 6 a 12 años" className="w-full rounded-lg mt-4" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript menu-page-bg">
      <BackToTop />
      <section className="flex flex-col items-center w-full max-w-[90vw] 2xl:max-w-[1400px] mt-10">
        <Link 
          to="/home" 
          className="self-start mb-8 font-inter text-amber-500 text-xl text-glow hover:text-opacity-80 transition-all duration-300 animate-fade-in"
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
            src="/lovable-uploads/bego_cierre.png"
            className="w-full h-auto rounded-lg object-contain max-w-full"
            alt="Escuela"
          />
        </div>
        
        <div className="w-full flex flex-col lg:flex-row gap-8 animate-fade-in"
             style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          {/* Submenu */}
          <div className="lg:w-1/4 w-full">
            <div className="p-4 sticky top-4">
              <h2 className="font-inter text-stone-100 text-xl mb-4">Secciones</h2>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-all duration-300 font-inter ${
                      activeSection === item.id
                        ? 'bg-white/20 text-orange-700 font-semibold'
                        : 'text-stone-100 hover:text-orange-700/70'
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
            <div className="p-6">
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