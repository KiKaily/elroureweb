import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / scrollHeight) * 100;
      
      // Show button after 10% scroll
      setIsVisible(scrollPercentage > 10);
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
  onClick={scrollToTop}
  className={`fixed bottom-8 right-8 p-3 rounded-full text-amber-900 text-glow-strong hover:scale-110 transition-all duration-300 z-50 shadow-lg ${
    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
  aria-label="Volver arriba"
  title="Volver arriba"
  style={{
    background: "transparent",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
  }}
>
  <ArrowUp size={24} />
</button>

  );
};

export default BackToTop;
