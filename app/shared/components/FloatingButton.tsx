import React from "react";
import { ArrowDown } from "lucide-react";

const FloatingButton: React.FC = () => {
  return (
    <button
      type="button"
      className="absolute bottom-20 right-8 rounded-full border border-gray-50/30 bg-black p-3 text-orange-400 transition-colors hover:bg-orange-400 hover:text-black"
    >
      <ArrowDown />
    </button>
  );
};

export default FloatingButton;
