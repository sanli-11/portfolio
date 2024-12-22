import type { Route } from "./+types/home";
import HomePage from "../home/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SanLi Portfolio" },
    {
      name: "description",
      content: "Welcome to my Portfolio. UI Designer and Frontend Developer",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
