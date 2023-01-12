import { useContext, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { auth } from "../../pages/_app";
import { signOut } from "firebase/auth";

import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import Burger from "./Burger/Burger";
import LogoImg from "./Logo/LogoImg";
import Menu from "./Menu/Menu";
import { UIContext } from "../../context/uiContext";

export default function Header(): JSX.Element {
  const isAuthUser = useAuth();

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
      className="relative drop-shadow-md border-b-[1px] border-slate-400 bg-white z-50 transition ease-in-out delay-150"
      style={
        isHeaderSticky
          ? { position: "sticky", top: "0", backgroundColor: "rgb(250 204 21)" }
          : {}
      }
    >
      <div className="max-w-7xl flex justify-between items-center mx-auto py-4 px-3">
        <div className="flex gap-[15px] items-center">
          <Link href="/">
            <a>
              <LogoImg />
              <span className="text-black text-4xl font-black ml-1">
                Medium
              </span>
            </a>
          </Link>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contacts">Contacts</NavLink>
          <NavLink
            href="/"
            style="withBG"
          >
            Follow
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {isAuthUser ? (
            <button
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
        <Burger
          menu={menu}
          setMenu={toggleMenu}
        />
        <Menu menu={menu} />
      </div>
    </header>
  );
}
