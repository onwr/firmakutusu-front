import React from "react";
import Header from "../components/Header";
import Hero from "../components/home/Hero";
import HeroSponsor from "../components/home/HeroSponsor";
import FirmaVitrin from "../components/home/FirmaVitrin";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroSponsor />
      <FirmaVitrin />
    </div>
  );
};

export default Home;
