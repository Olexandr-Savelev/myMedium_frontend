import { FC } from "react";

import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";

const MobileNav: FC = () => {
  return (
    <div className="flex items-center gap-2 md:hidden">
      <Search />
      <Burger />
      <Menu />
    </div>
  );
};

export default MobileNav;
