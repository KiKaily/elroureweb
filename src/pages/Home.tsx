import React, { useState, useEffect } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  const fromLanding = location.state?.fromLanding === true;
  const [isLogoAnimating, setIsLogoAnimating] = useState(fromLanding);
  const [showContent, setShowContent] = useState(!fromLanding);

  useEffect(() => {
    if (fromLanding) {
      // Logo animation duration
      const logoTimer = setTimeout(() => {
        setIsLogoAnimating(false);
        setShowContent(true);
      }, 2000);
      
      return () => clearTimeout(logoTimer);
    }
  }, [fromLanding]);

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <div className="relative w-full flex justify-center" style={{ minHeight: isLogoAnimating ? '100vh' : 'auto' }}>
        <div 
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-2000 ease-out ${
            isLogoAnimating 
              ? 'top-1/2 -translate-y-1/2 z-50' 
              : 'top-[40px]'
          }`}
          style={{
            transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <Logo className="" animationDelay={0} />
        </div>
      </div>
      
      <div className={`w-full transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`} style={{ marginTop: isLogoAnimating ? '0' : '450px' }}>
        {showContent && (
          <MainContent skipAnimations={!fromLanding} />
        )}
      </div>
    </main>
  );
};

export default Home;