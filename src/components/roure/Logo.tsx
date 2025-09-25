
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
      // Skip animation on mobile/tablet
      const delay = isMobile ? 0 : animationDelay;
      const timer = setTimeout(() => {
        setIsLoaded(true);
        sessionStorage.setItem('logoAnimationPlayed', 'true');
      }, delay);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [animationDelay, isLoaded, isMobile]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link to="/home">
        <div className="overflow-hidden" style={{ transform: "translateX(-5%)", cursor: "pointer" }}>
          <img
            src="/lovable-uploads/logo el roure.png"
            className={`w-[400px] h-auto max-sm:w-[300px] max-sm:h-auto transition-all duration-3000`}
            alt="Roure Logo"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
              transition: isMobile ? "all 0.8s ease-out" : "all 2s ease-out"
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
