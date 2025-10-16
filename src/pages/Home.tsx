import React, { useState, useEffect } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  const fromLanding = location.state?.fromLanding === true;
  const [hasAnimated, setHasAnimated] = useState(() => {
    return sessionStorage.getItem('homeAnimationPlayed') === 'true';
  });

  useEffect(() => {
    if (fromLanding && !hasAnimated) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('homeAnimationPlayed', 'true');
        setHasAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [fromLanding, hasAnimated]);

  return (
    <main className="h-screen max-h-screen overflow-hidden flex flex-col items-center mx-auto px-5 py-8 lg:py-12 font-handscript menu-page-bg">
      <div className="w-full flex-1 flex items-center justify-center overflow-y-auto">
        <MainContent skipAnimations={!fromLanding || hasAnimated} />
      </div>
    </main>
  );
};

export default Home;
