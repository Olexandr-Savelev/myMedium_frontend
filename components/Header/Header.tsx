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
      className={`relative drop-shadow-md border-b ${
        route === "/" ? "bg-yellow-400" : "bg-white"
      } border-slate-400 z-10`}
      style={
        isHeaderSticky
          ? {
              position: "sticky",
              top: "0",
              backgroundColor: "transparent",
              backdropFilter: "blur(8px)",
            }
          : {}
      }
    >
      <div className="max-w-7xl flex justify-between items-center mx-auto py-3 px-3">
        <Logo />
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
