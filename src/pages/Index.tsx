import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/roure/Logo";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 500); // Show entrar button after 0.5s
    
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/home', { state: { fromLanding: true } });
  };

  return (
    <>
      <main className="max-w-none min-h-screen flex flex-col items-center justify-center mx-auto p-5 landing-bg">
        <div id="landing-logo" className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both', transform: 'translateX(-5%)' }}>
          <Logo className="mb-10 scale-150 lg:scale-[1.75]" animationDelay={0} />
        </div>
        
        <button
          onClick={handleEnter}
          className={`font-handscript text-stone-100 text-3xl mt-10 cursor-pointer text-center transition-all duration-1000 animate-fade-in ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: loadingComplete ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
            transition: 'transform 0.8s ease-out, opacity 1s ease-out',
            position: 'relative',
            animationDelay: '0.4s',
            animationFillMode: 'both',
          }}
        >
          <span className="relative z-10 hover:text-opacity-80 transition-colors duration-300 font-handscript">
            entrar
          </span>
        </button>
      </main>
      
    </>
  );
};

export default Index;