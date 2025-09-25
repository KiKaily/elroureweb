import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/roure/Logo";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 500); // Show entrar button after 0.5s
    
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsTransitioning(true);
    
    // Fade to black for 1.5s, then navigate and fade in
    setTimeout(() => {
      navigate('/home');
    }, 1500);
  };

  return (
    <>
      <main className="max-w-none min-h-screen flex flex-col items-center justify-center mx-auto p-5 landing-bg">
        <Logo className="mb-10" animationDelay={0} />
        
        <button
          onClick={handleEnter}
          className={`font-inter text-stone-100 text-2xl mt-10 cursor-pointer text-center transition-all duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: loadingComplete ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
            transition: 'transform 0.8s ease-out, opacity 1s ease-out',
            position: 'relative',
          }}
        >
          <span className="relative z-10 hover:text-opacity-80 transition-colors duration-300">
            entrar
          </span>
        </button>
      </main>
      
      {/* Transition overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-1500 ${
          isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
    </>
  );
};

export default Index;