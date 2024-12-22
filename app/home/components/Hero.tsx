import React from "react";
import HeroFloatingLabels from "./HeroFloatingTitle";
import LargeButton from "~/shared/components/LargeButton";
import HeroText from "./HeroText";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-dvh w-full">
      <HeroFloatingLabels />
      <article className="absolute bottom-24 left-8 grid grid-rows-3 gap-0">
        <HeroText>Tagline</HeroText>
        <div className="grid w-full grid-cols-2 gap-x-8">
          <HeroText color="orange">Some Text</HeroText>
          <div className="group mb-6 mr-52 place-self-end">
            <h2 className="hidden">Innovate For Design Deliver</h2>
            <pre className="cursor-default text-pretty font-sans text-lg text-gray-500 transition-colors group-hover:text-white">
              A long paragraph describing the services you provide as well as
              previous works. This text should be used as a hook and satisfies
              the visitor of the site looking for information about you.
            </pre>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-8">
          <HeroText>Tagline</HeroText>
          <div className="flex items-end justify-start">
            <LargeButton text="Let's Contact" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
