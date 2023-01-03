import { signOut } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../pages/_app";
import NavLink from "../NavLink/NavLink";
import Burger from "./Burger/Burger";
import LogoImg from "./Logo/LogoImg";
import Menu from "./Menu/Menu";

export default function Header(): JSX.Element {
  const isAuthUser = useAuth();

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
    <header className="relative border-b-2 border-slate-400 ">
      <div className="max-w-7xl flex justify-between items-center mx-auto py-[15px] px-[15px]">
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
