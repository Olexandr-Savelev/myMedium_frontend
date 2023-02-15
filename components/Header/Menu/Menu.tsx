import { FC, useContext, useEffect, useRef } from "react";

import { useAuth } from "../../../hooks/useAuth";

import { signOut } from "firebase/auth";
import { auth } from "../../../pages/_app";

import NavLink from "../../NavLink/NavLink";
import { UIContext } from "../../../context/uiContext";

import cn from "classnames";
import styles from "./Menu.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Menu: FC = () => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const { menu, toggleMenu } = useContext(UIContext);
  const firebaseUser = useAuth();

  useEffect(() => {
    const callHandlerOnOutsideClick = (event: any) => {
      if (menuRef.current) {
        if (!menuRef.current.contains(event.target as Node)) {
          toggleMenu();
        }
      }
    };
    document.addEventListener("click", callHandlerOnOutsideClick);
    return () => {
      document.removeEventListener("click", callHandlerOnOutsideClick);
    };
  });

  return (
    <AnimatePresence>
      {menu && (
        <motion.ul
          initial={{ opacity: 0, top: "10px" }}
          animate={{ opacity: 1, top: "50px" }}
          exit={{ opacity: 0, top: "10px" }}
          className={cn([styles.menu], "min-w-[80vw] sm:min-w-[80vw]")}
          ref={menuRef}
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
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Menu;
