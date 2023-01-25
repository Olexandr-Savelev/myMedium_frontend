import { FC } from "react";

import Link from "next/link";
import LogoImg from "./LogoImg";

const Logo: FC = () => {
  return (
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
  );
};

export default Logo;
