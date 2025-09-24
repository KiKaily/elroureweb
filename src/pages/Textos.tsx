import React from "react";
import { Link } from "react-router-dom";

const Textos: React.FC = () => {
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
          Textos
        </h1>
        
        <div className="w-full max-w-[800px]">
          <ul className="space-y-8">
            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Amigos y amigas por carta
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Mercè de la Cruz
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Escrito a mano
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Guillermo Jaim Etcheverry
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Escriptorroures
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Paco Robles, Educador
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Límites y limitaciones
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González, Educadora
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Artículo Boletín 1
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Revista Nº  1 La Casita
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Celebrando el milagro de la vida: la ciencia con los niños y niñas
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Mercè de la Cruz, Educadora
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Que la vida sea el eje de la educación
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Ulrike Kaesse, Madre, y Begoña González, Educadora
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  ¿Estamos o no haciendo matemáticas?
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Lara Jiménez. Revista Roure
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Dues experiències de restauració
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Paco Robles. Revista Roure
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Artículo Boletín 1
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Revista Nº  1 La Casita
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Una pedagogia de la relació
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Revista Roure
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Un bañador con bolsillos
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González, Educadora
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Feminidad y masculinidad...
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González, Educadora
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Taller d’andròmines
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Montse Bertran, Educadora
                </h3>
              </Link>
            </li>

            <h1 className="font-jacques text-stone-100 text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Publicaciones en la revista de La Casita (1996-2000?)
        </h1>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Artículo (titular?)
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Revista La Casita (poner autoría?)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  La muerte de cada día
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Despiértate papá (y mamá)
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Cine, bebés y sensibilidad
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Cristóbal Gutiérrez
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Despedida
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González y Cristóbal Gutiérrez
              </Link>
            </li>

            <h1 className="font-jacques text-stone-100 text-4xl xl:text-5xl 2xl:text-6xl mb-8 text-center animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Publicaciones externas
        </h1>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Cuidar la vida que somos
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Dossier Graó. Renaturalitzar els espais i el temps educatius. Nº 7 (2022)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Cap a la trobada
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Diari de l’educació (2022)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  L'escola El Roure celebra el 20é aniversari
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Diari Ara.  (14-5-2022)
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Quin sentit té el Nadal a l'escola?
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  Begoña González. Viure en familia. Nº 76 (2018)
                </h3>
              </Link>
            </li>

            <li className="border-l-4 border-stone-100 pl-6 py-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <Link to="#" className="block hover:bg-stone-100/5 transition-colors duration-300 p-2 -m-2 rounded">
                <h2 className="font-jacques text-stone-100 text-2xl xl:text-3xl mb-2">
                  Habitar el espacio y el tiempo en la escuela alternativa: recorridos y relatos. Tiempos y espacios en la escuela
                </h2>
                <h3 className="font-montserrat text-stone-100 text-lg xl:text-xl italic mb-2">
                  José Contreras y Begoña González. Investigación en la escuela. Nº 79 (2013)
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