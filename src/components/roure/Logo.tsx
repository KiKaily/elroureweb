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
        <div style={{ cursor: "pointer" }}>
          <img
            src="/lovable-uploads/logo el roure.png"
            className="logo-responsive h-auto"
            alt="Roure Logo"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3)) drop-shadow(0 0 15px rgba(255,255,255,0.15))"
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
