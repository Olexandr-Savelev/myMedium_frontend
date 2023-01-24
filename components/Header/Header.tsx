import Link from "next/link";
import { useContext, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import NavLink from "../NavLink/NavLink";
import Burger from "./Burger/Burger";
import LogoImg from "./Logo/LogoImg";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";

import { auth } from "../../pages/_app";
import { signOut } from "firebase/auth";

import { UIContext } from "../../context/uiContext";

export default function Header(): JSX.Element {
  const firebaseUser = useAuth();

  const { isHeaderSticky } = useContext(UIContext);

  const SignOut = () => {
    signOut(auth);
  };

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else setMenu(false);
  };

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
        <Link
          href="/"
          passHref
        >
          <a className="flex items-center">
            <LogoImg />
            <span className="hidden text-black text-4xl font-black ml-1 xs:block sm:block">
              Medium
            </span>
          </a>
        </Link>
        <div className="hidden gap-4 items-center md:flex">
          <Search />
          <NavLink href="/about">About</NavLink>
          <div className="hidden md:flex items-center gap-3">
            {firebaseUser ? (
              <button
                className="font-bold hover:underline"
                type="button"
                onClick={SignOut}
              >
                SignOut
              </button>
            ) : (
              <>
                <NavLink href="/signin">Sign In</NavLink>
                <NavLink
                  href="/registration"
                  style="withBorder"
                >
                  Get Started
                </NavLink>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Search />
          <Burger
            menu={menu}
            setMenu={toggleMenu}
          />
          <Menu menu={menu} />
        </div>
      </div>
    </header>
  );
}
