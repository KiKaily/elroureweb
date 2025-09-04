
import React from "react";
import Logo from "@/components/roure/Logo";
import MainContent from "@/components/roure/MainContent";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const skipAnimations = params.get("skipAnimations") === "1";

  return (
    <main className="max-w-none min-h-screen flex flex-col items-center mx-auto p-5 max-md:max-w-[991px] max-sm:max-w-screen-sm font-handscript">
      <Logo className="mt-10" animationDelay={skipAnimations ? 0 : 2000} />
      <MainContent skipAnimations={skipAnimations} />
    </main>
  );
};

export default Home;
