import NavLink from "../../NavLink/NavLink";
import cn from "classnames";
import styles from "./Menu.module.scss";

interface MenuProps {
  menu: boolean;
}

export default function Menu({ menu }: MenuProps): JSX.Element {
  const responsiveStyles = "min-w-[80vw] sm:min-w-[80vw]";

  return (
    <ul
      className={cn([styles.menu], responsiveStyles, {
        [styles.active]: menu,
      })}
    >
      <li>
        <NavLink
          href=""
          inMenu={true}
        >
          Sign In
        </NavLink>
      </li>
      <li className="border-b-2">
        <NavLink
          href=""
          inMenu={true}
          style="textColor"
        >
          Get Started
        </NavLink>
      </li>
      <li>
        <NavLink
          href=""
          inMenu={true}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          href="/contacts"
          inMenu={true}
        >
          Contacts
        </NavLink>
      </li>
      <li>
        <NavLink
          href=""
          inMenu={true}
        >
          Follow
        </NavLink>
      </li>
    </ul>
  );
}
