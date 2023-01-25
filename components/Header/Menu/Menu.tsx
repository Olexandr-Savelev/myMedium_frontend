import { FC, useContext } from "react";
import { signOut } from "firebase/auth";

import { useAuth } from "../../../hooks/useAuth";
import { auth } from "../../../pages/_app";

import NavLink from "../../NavLink/NavLink";
import { UIContext } from "../../../context/uiContext";

import cn from "classnames";
import styles from "./Menu.module.scss";

const Menu: FC = () => {
  const { menu, toggleMenu } = useContext(UIContext);

  const firebaseUser = useAuth();
  const responsiveStyles = "min-w-[80vw] sm:min-w-[80vw]";

  return (
    <ul
      className={cn([styles.menu], responsiveStyles, {
        [styles.active]: menu,
      })}
    >
      <li>
        <NavLink
          href="/about"
          inMenu={true}
        >
          About
        </NavLink>
      </li>
      {firebaseUser ? (
        <button
          className="font-medium text-2xl text-red-500 hover:underline"
          onClick={() => {
            signOut(auth), toggleMenu();
          }}
        >
          Sign Out
        </button>
      ) : (
        <>
          <li>
            <NavLink
              href="/signin"
              inMenu={true}
            >
              Sign In
            </NavLink>
          </li>
          <li className="border-b-2">
            <NavLink
              href="/registration"
              inMenu={true}
              style="textColor"
            >
              Get Started
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default Menu;
