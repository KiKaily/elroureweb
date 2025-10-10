import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  className?: string;
  animationDelay?: number;
}

const Logo: React.FC<LogoProps> = ({ className, animationDelay = 0 }) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(() => {
    return sessionStorage.getItem('logoAnimationPlayed') === 'true';
  });
  
  useEffect(() => {
    if (!isLoaded) {
      const delay = isMobile ? 0 : animationDelay;
      const timer = setTimeout(() => {
        setIsLoaded(true);
        sessionStorage.setItem('logoAnimationPlayed', 'true');
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [animationDelay, isLoaded, isMobile]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link to="/home">
        {/* Contenedor reducido para que el glow no genere rectángulo */}
        <div
          className="overflow-visible rounded-lg p-0"
          style={{ cursor: "pointer" }}
        >
          <img
            src="/lovable-uploads/logo el roure.png"
            className="w-[250px] h-auto max-sm:w-[230px] max-sm:h-auto text-glow-strong"
            alt="Roure Logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
