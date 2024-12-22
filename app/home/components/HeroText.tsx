import React from "react";

type Prop = {
  color?: "white" | "orange";
  children: React.ReactNode;
};

const HeroText: React.FC<Prop> = ({ children, color = "white" }) => {
  const textColor = color === "white" ? "text-white" : "text-orange-400";

  return (
    <h3
      className={`font-square cursor-default text-[10rem] font-bold uppercase leading-none ${textColor}`}
    >
      {children}
    </h3>
  );
};

export default HeroText;
