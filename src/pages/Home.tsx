import React, { useState, useEffect } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  const fromLanding = location.state?.fromLanding === true;
  const [logoVisible, setLogoVisible] = useState(!fromLanding);

  useEffect(() => {
    if (fromLanding) {
      const timer = setTimeout(() => setLogoVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [fromLanding]);

  return (
    <main className="h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center mx-auto px-5 py-8 lg:py-12 font-handscript menu-page-bg">
      <div
        className={`flex-shrink-0 mb-6 lg:mb-12 w-full flex justify-center transition-opacity duration-1000 ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Logo className="" animationDelay={0} />
      </div>

      <div className="w-full flex-1 flex items-center justify-center overflow-y-auto">
        <MainContent skipAnimations={!fromLanding} />
      </div>
    </main>
  );
};

export default Home;
