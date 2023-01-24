import NavLink from "../../NavLink/NavLink";
import cn from "classnames";
import styles from "./Menu.module.scss";
import { useAuth } from "../../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../../pages/_app";

interface MenuProps {
  menu: boolean;
}

export default function Menu({ menu }: MenuProps): JSX.Element {
  const firebaseUser = useAuth();
  const responsiveStyles = "min-w-[80vw] sm:min-w-[80vw]";

  return (
    <ul
      className={cn([styles.menu], responsiveStyles, {
        [styles.active]: menu,
      })}
    >
      {firebaseUser ? (
        <button
          className="font-medium text-2xl"
          onClick={() => signOut(auth)}
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

      <li>
        <NavLink
          href="/about"
          inMenu={true}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
}
