import React from "react";
import Header from "../shared/components/Header";
import Hero from "./components/Hero";
import FloatingButton from "~/shared/components/FloatingButton";

const HomePage: React.FC = () => {
  return (
    <main className="relative grid">
      <FloatingButton />
      <Header />
      <Hero />
    </main>
  );
};

export default HomePage;
