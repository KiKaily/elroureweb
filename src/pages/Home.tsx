import React, { useState, useEffect } from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="h-screen max-h-screen overflow-hidden flex flex-col items-center justify-start mx-auto px-5 py-3 font-handscript">
      <div className="flex-shrink-0 mb-4">
        <Logo className="" animationDelay={0} />
      </div>
      
      <div className="w-full flex-1 overflow-y-auto">
        <MainContent skipAnimations={true} />
      </div>
    </main>
  );
};

export default Home;