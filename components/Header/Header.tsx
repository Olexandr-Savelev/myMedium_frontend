import { FC, useContext } from "react";

import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import MobileNav from "./Nav/MobileNav";

import { UIContext } from "../../context/uiContext";
import { useRouter } from "next/router";

const Header: FC = () => {
  const { isHeaderSticky } = useContext(UIContext);

  const { route } = useRouter();

  return (
    <header
      className={`border-slate-400 drop-shadow-md border-b relative 
      ${route === "/" ? "bg-yellow-400 z-10" : "bg-white"} 
      ${isHeaderSticky && "sticky top-0 bg-transparent backdrop-blur-md"}`}
    >
      <nav className="max-w-7xl flex justify-between items-center mx-auto py-3 px-3">
        <Logo />
        <Nav />
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
