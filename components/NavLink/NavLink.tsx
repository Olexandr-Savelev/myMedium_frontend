import { NavLinkProps } from "./NavLinkProps";
import cn from "classnames";
import styles from "./NaLink.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const NavLink: FC<NavLinkProps> = ({
  children,
  href = "/",
  style,
  inMenu = false,
}) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={href}
      passHref
    >
      <a
        style={
          pathname == href
            ? { color: "#9c9c9c", textDecoration: "underline" }
            : {}
        }
        className={cn([styles.link], {
          [styles.withBorder]: style === "withBorder",
          [styles.withBG]: style === "withBG",
          [styles.textColor]: style === "textColor",
          [styles.inMenu]: inMenu === true,
        })}
      >
        {children}
      </a>
    </Link>
  );
};
export default NavLink;
