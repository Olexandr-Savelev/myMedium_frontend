import { FC, useContext } from "react";

import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import MobileNav from "./Nav/MobileNav";

import { UIContext } from "../../context/uiContext";

const Header: FC = () => {
  const { isHeaderSticky } = useContext(UIContext);

  return (
    <header
      className="relative drop-shadow-md border-b-[1px] border-slate-400 bg-yellow-400 z-10 transition ease-in-out delay-150"
      style={
        isHeaderSticky
          ? {
              position: "sticky",
              top: "0",
              // backgroundColor: "rgba(250, 204, 21, 0.6)",
              backgroundColor: "transparent",
              backdropFilter: "blur(8px)",
            }
          : {}
      }
    >
      <div className="max-w-7xl flex justify-between items-center mx-auto py-4 px-3">
        <Logo />
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
