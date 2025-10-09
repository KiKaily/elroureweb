
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
  <ul className="flex flex-col items-center space-y-2">
          {menuItems.map((item, index) => (
            <li key={item.text} className="py-1 my-0">
              <Link
                to={item.href}
                className="font-inter text-orange-700 text-xl sm:text-2xl hover:text-orange-600 transition-all duration-300 block text-center text-glow-sm"
                style={{
                  textDecoration: 'none'
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
          
          <li className="pt-2 mt-2 border-t border-stone-100/20">
            <Link
              to={specialMenuItem.href}
              className="font-inter text-amber-400 text-lg sm:text-xl hover:text-amber-300 transition-all duration-300 block text-center text-glow-sm"
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
    <div className="flex flex-col justify-center z-20 absolute right-0 top-1/2 transform -translate-y-1/2" style={{ right: '10%', top: '58%', maxWidth: '220px' }}>
      <nav 
        className={`transition-all duration-1000 ${loadingStage >= 4 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: loadingStage >= 4 ? 'translateX(0)' : 'translateX(50px)',
          transition: 'transform 1s ease-out, opacity 1s ease-out'
        }}
      >
  <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={item.text} className="py-1 my-0">
              <Link
                to={item.href}
                className="font-inter text-orange-700 text-lg xl:text-xl hover:text-orange-600 transition-all duration-300 block text-glow-sm"
                style={{
                  textDecoration: 'none'
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
          
          <li className="pt-2 mt-2 border-t border-stone-100/20">
            <Link
              to={specialMenuItem.href}
              className="font-inter text-amber-400 text-sm xl:text-base hover:text-amber-300 transition-all duration-300 block text-glow-sm"
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
