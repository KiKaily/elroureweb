
import React from "react";
import { Link } from "react-router-dom";

type LeftMenuProps = {
  loadingStage: number;
  isMobile?: boolean;
};

const LeftMenu: React.FC<LeftMenuProps> = ({ loadingStage, isMobile = false }) => {
  const menuItems = [
    { text: "Historia", href: "/historia" },
    { text: "Fundamentos", href: "/fundamentos" },
    { text: "Escuela", href: "/escuela" },
    { text: "Videos", href: "/videos" },
    { text: "Textos", href: "/textos" },
  ];

  const specialMenuItem = { text: "Nuevos Proyectos", href: "/nuevos-proyectos" };

  if (isMobile) {
    return (
      <nav 
        className={`transition-all duration-1000 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: loadingStage >= 4 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 1s ease-out, opacity 1s ease-out'
        }}
      >
        <ul className="flex flex-col items-center space-y-4">
          {menuItems.map((item, index) => (
            <li key={item.text}>
              <Link
                to={item.href}
                className="font-inter text-orange-700 text-xl sm:text-2xl hover:text-orange-600 transition-all duration-300 block text-center"
                style={{
                  textDecoration: 'none'
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
          
          <li className="pt-6 mt-6 border-t border-stone-100/20">
            <Link
              to={specialMenuItem.href}
              className="font-inter text-amber-500 text-xl sm:text-2xl hover:text-amber-400 transition-all duration-300 block text-center"
              style={{
                textDecoration: 'none'
              }}
            >
              {specialMenuItem.text}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className="flex flex-col justify-center z-20 absolute right-0 top-1/2 transform -translate-y-1/2" style={{ right: '5%', maxWidth: '400px' }}>
      <nav 
        className={`transition-all duration-1000 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: loadingStage >= 4 ? 'translateX(0)' : 'translateX(50px)',
          transition: 'transform 1s ease-out, opacity 1s ease-out'
        }}
      >
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li key={item.text}>
              <Link
                to={item.href}
                className="font-inter text-orange-700 text-xl xl:text-2xl 2xl:text-3xl hover:text-orange-600 transition-all duration-300 block"
                style={{
                  textDecoration: 'none'
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
          
          <li className="pt-6 mt-6 border-t border-stone-100/20">
            <Link
              to={specialMenuItem.href}
              className="font-inter text-amber-500 text-xl xl:text-2xl 2xl:text-3xl hover:text-amber-400 transition-all duration-300 block"
              style={{
                textDecoration: 'none'
              }}
            >
              {specialMenuItem.text}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftMenu;
