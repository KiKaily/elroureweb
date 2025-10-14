import React, { useState, useEffect } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  const fromLanding = location.state?.fromLanding === true;
  const [logoVisible, setLogoVisible] = useState(!fromLanding);
  const [hasAnimated, setHasAnimated] = useState(() => {
    return sessionStorage.getItem('homeAnimationPlayed') === 'true';
  });

  useEffect(() => {
    if (fromLanding && !hasAnimated) {
      const timer = setTimeout(() => {
        setLogoVisible(true);
        sessionStorage.setItem('homeAnimationPlayed', 'true');
        setHasAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    } else if (!fromLanding) {
      setLogoVisible(true);
    }
  }, [fromLanding, hasAnimated]);

  return (
    <main className="h-screen max-h-screen overflow-hidden flex flex-col items-center mx-auto px-5 py-8 lg:py-12 font-handscript menu-page-bg">
      <div
        className={`flex-shrink-0 mb-8 lg:mb-16 w-full flex justify-center transition-opacity duration-1000 ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ marginTop: '8vh' }}
      >
        <Logo className="scale-125 lg:scale-150" animationDelay={0} />
      </div>

      <div className="w-full flex-1 flex items-center justify-center overflow-y-auto">
        <MainContent skipAnimations={!fromLanding || hasAnimated} />
      </div>
    </main>
  );
};

export default Home;
