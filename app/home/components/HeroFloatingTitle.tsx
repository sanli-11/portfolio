import React from "react";
import heroTitle from "~/shared/data/heroTitle";
import type { HeroTitle } from "~/types/HeroTitle";

const HeroFloatingLabels: React.FC = () => {
  return (
    <ul className="absolute left-0 right-0 top-[20%] mx-24 flex -translate-y-[20%] items-center justify-between">
      {heroTitle.map((titles: HeroTitle) => (
        <li
          key={titles.id}
          className="before:mr-6 before:font-bold before:text-orange-400 before:content-['['] after:ml-6 after:font-extrabold after:text-orange-500 after:content-[']']"
        >
          <span className="cursor-default font-medium uppercase">
            {titles.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default HeroFloatingLabels;
