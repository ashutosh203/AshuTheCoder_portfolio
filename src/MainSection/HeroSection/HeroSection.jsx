import React from "react";
import HeroSectionIntro from "./HeroSectionIntro";
import "./HeroSection.css";
import HeroSectionProjectContact from "./HeroSectionProjectContact";
import HeroSectionGitLindin from "./HeroSectionGitLindin";
import Tsparticles from "../../ts/tsparticles";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center scroll-target"
    >
      <div>
      <Tsparticles/>
        <HeroSectionIntro />
        <HeroSectionProjectContact />
        <HeroSectionGitLindin/>
      </div>
    </section>
  );
};

export default HeroSection;
