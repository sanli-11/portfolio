import { ArrowUpRight } from "lucide-react";
import React from "react";

type Prop = {
  text: string;
};

const LargeButton: React.FC<Prop> = ({ text }) => {
  return (
    <button
      type="button"
      className="group flex gap-x-2 rounded-lg bg-white px-4 py-3 font-bold uppercase text-black transition-colors hover:bg-orange-400 hover:text-white"
    >
      {text}
      <ArrowUpRight className="text-orange-400 transition-all group-hover:scale-125 group-hover:text-black" />
    </button>
  );
};

export default LargeButton;
