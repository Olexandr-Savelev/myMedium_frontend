import { FC } from "react";

import Search from "../Search/Search";
import NavLink from "../../NavLink/NavLink";

import { signOut } from "firebase/auth";
import { useAuth } from "../../../hooks/useAuth";
import { auth } from "../../../pages/_app";

const Nav: FC = () => {
  const firebaseUser = useAuth();

  const SignOut = () => {
    signOut(auth);
  };

  return (
    <>
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
    </>
  );
};

export default Nav;
