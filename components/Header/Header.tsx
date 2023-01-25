import { useContext } from "react";

import Burger from "./Burger/Burger";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

import { UIContext } from "../../context/uiContext";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";

export default function Header(): JSX.Element {
  const { isHeaderSticky } = useContext(UIContext);

  return (
    <header
      className="relative drop-shadow-md border-b-[1px] border-slate-400 bg-white z-40 transition ease-in-out delay-150"
      style={
        isHeaderSticky
          ? { position: "sticky", top: "0", backgroundColor: "rgb(250 204 21)" }
          : {}
      }
    >
      <div className="max-w-7xl flex justify-between items-center mx-auto py-4 px-3">
        <Logo />
        <div className="hidden gap-4 items-center md:flex">
          <Nav />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Search />
          <Burger />
          <Menu />
        </div>
      </div>
    </header>
  );
}
