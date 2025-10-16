import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import BackToTop from "@/components/roure/BackToTop";

const Textos: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  }, [isMobile]);
  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript menu-page-bg pb-32">
  <BackToTop />
  <section className="flex flex-col items-start w-full max-w-[90vw] 2xl:max-w-[1200px] mt-10">
    <Link 
      to="/home" 
      className="self-start mb-8 font-inter text-amber-500 text-xl text-glow hover:text-opacity-80 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
    >
      ← Volver
    </Link>
    
    <h1
      className="font-inter text-orange-700 text-4xl xl:text-5xl 2xl:text-6xl mb-4 text-left animate-fade-in"
      style={{ 
        animationDelay: '0.2s', 
        animationFillMode: 'both',
        textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2)'
      }}
    >
      Textos
    </h1>

    <h2
      className="font-inter text-amber-500 text-4xl xl:text-5xl 2xl:text-6xl mb-12 text-left animate-fade-in"
      style={{ 
        animationDelay: '0.3s', 
        animationFillMode: 'both',
        textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2)'
      }}
    >
      Una colección de textos y publicaciones relacionadas con El Roure.
    </h2>

    <div className="w-full max-w-[800px]">
      <ul className="space-y-8">
  <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
    <a href="/textos/EL-ROURE-BOLETIN-13_PC.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
      
      <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow pl-0">
        Boletín 13 · Cierre de la escuela El Roure
      </h2>
      <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2 pl-0">
        El último boletín de la escuela El Roure. Una adaptación de la revista impresa para la comunidad escolar
      </h3>
      <p className="pl-0">
        <span className="text-stone-100">Versión para</span>{' '}
        <a
          href="/textos/EL-ROURE-BOLETIN-13_PC.pdf"
          className="text-stone-100 underline hover:text-amber-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ordenador
        </a>
        <span className="text-stone-100 px-1">/</span>
        <a
          href="/textos/EL-ROURE-BOLETIN-13_MOVIL.pdf"
          className="text-stone-100 underline hover:text-amber-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Móvil
        </a>.
      </p>
    </a>
  </li>

  <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
    <a href="/textos/UNA-PEDAGOGIA-DE-LA-RELACIO.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
      <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow pl-0">
        Una pedagogia de la relació
      </h2>
      <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2 pl-0">
        Begoña González. Revista Roure
      </h3>
    </a>
  </li>

            
            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <a href="/textos/CRISTOBAL-TRAJO-EL-SEITAI-A-EL-ROURE.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Cristóbal trajo el Seitai a El Roure
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/EL-CONSUMISMO-QUE-ENTURBIA-EL-ALMA.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  El consumismo que enturbia el alma
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
              <a href="/textos/DIVIDETE-Y-SUFIRAS.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Divídete y sufrirás
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <a href="/textos/IN-MEMORIAN.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  In memorian
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/QUE-LA-VIDA-SEA-EL-EJE-DE-LA-EDUCACION.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Que la vida sea el eje de la educación
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Ulrike Kaesse y Begoña González
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <a href="/textos/LA-MIRADA-AMOROSA.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  La mirada amorosa
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/FEMINIDAD-Y-MASCULINIDAD.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Feminidad y masculinidad...
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <a href="/textos/QUE-SER-VALIENTE-NO-SALGA-TAN-CARO.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Que ser valiente no salga tan caro, que ser cobarde no valga la pena
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <a href="/textos/LIMITES-Y-LIMITACIONES.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Límites y limitaciones
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <a href="/textos/HORA-DE-MARCHARME-DE-EL-ROURE.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Hora de marcharme de El Roure
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <a href="/textos/CRIS-SE-VA-2007.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Cris se va (2007)
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <a href="/textos/ESCRIPTORROURES.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Escriptorroures
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Paco Robles
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/DUES-EXPERIENCIES-DE-RESTAURACIO.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Dues experiències de restauració
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Paco Robles. Revista Roure
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/ESTAMOS-O-NO-HACIENDO-MATEMATICAS.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  ¿Estamos o no haciendo matemáticas?
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Lara Jiménez. Revista Roure
                </h3>
              </a>
            </li>
            
            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <a href="/textos/AMIGOS-Y-AMIGAS-POR-CARTA.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Amigos y amigas por carta
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Mercè de la Cruz
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/CELEBRANDO-EL-MILAGRO-DE-LA-VIDA.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Celebrando el milagro de la vida: la ciencia con los niños y niñas
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Mercè de la Cruz
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/TALLER-D-ANDROMINES.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Taller d'andròmines
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Montse Bertran
                </h3>
              </a>
            </li>

        <h1 className="font-inter text-amber-500 text-4xl xl:text-5xl 2xl:text-6xl my-12 text-center animate-fade-in"
            style={{ 
              animationDelay: '0.2s', 
              animationFillMode: 'both',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2)'
            }}>
          Publicaciones en la revista de La Casita (1996-2000?)
        </h1>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/COSAS-QUE-PASAN.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Cosas que pasan
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/LA-MUERTE-DE-CADA-DIA.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  La muerte de cada día
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/DESPIERTATE-PAPA-Y-MAMA.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Despiértate papá (y mamá)
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <a href="/textos/CINES-BEBES-Y-SENSIBILIDAD.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded" target="_blank" rel="noopener noreferrer">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Cine, bebés y sensibilidad
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </a>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="/textos/DESPEDIDA.pdf" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Despedida
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González y Cristóbal Gutiérrez
                  </h3>
              </Link>
            </li>

            <h1 className="font-inter text-amber-500 text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in text-glow"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Publicaciones externas
        </h1>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="https://www.grao.com/revistas/renaturalizar-los-espacios-y-los-tiempos-educativos-42841" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Cuidar la vida que somos
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Dossier Graó. Renaturalitzar els espais i el temps educatius. Nº 7 (2022)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="https://diarieducacio.cat/cap-a-la-trobada/?hilite=trobada" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Cap a la trobada
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Diari de l'educació (2022)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="https://revistaaula.com/" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Acompanyament i solituds necessàries
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Revista Aula de Innovación Educativa (2021)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="https://revistaaula.com/" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  El canvi de mirada
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Revista Aula de Innovación Educativa (2020)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="https://revistaaula.com/" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-inter text-amber-500 text-2xl xl:text-3xl mb-2 text-glow">
                  Acompanyar el moviment intern i la relació
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Revista Aula de Innovación Educativa (2019)
                </h3>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Textos;
