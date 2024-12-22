import React from "react";
import navLink from "~/shared/data/navLink";
import type { NavLink } from "~/types/NavLink";

const Header: React.FC = () => {
  return (
    <header className="col-start-1 col-end-1 row-start-1 row-end-1 mx-4 mt-4 flex items-center justify-between">
      <h1 className="cursor-pointer text-3xl font-bold lowercase transition-all hover:ml-1 hover:scale-110 hover:text-orange-400">
        SanLi
      </h1>
      <nav className="hidden lg:inline-block">
        <ul className="flex items-center justify-end gap-x-12">
          {navLink.map((nav: NavLink) => (
            <li
              key={nav.id}
              className="text-white transition-colors hover:text-orange-400"
            >
              <a href={nav.link} className="text-lg uppercase">
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
