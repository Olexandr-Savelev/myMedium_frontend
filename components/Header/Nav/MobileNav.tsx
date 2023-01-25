import { FC } from "react";

import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";

const MobileNav: FC = () => {
  return (
    <>
      <Search />
      <Burger />
      <Menu />
    </>
  );
};

export default MobileNav;
