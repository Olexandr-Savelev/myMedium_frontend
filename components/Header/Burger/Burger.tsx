import { FC, useContext } from "react";
import { UIContext } from "../../../context/uiContext";

import styles from "./Burger.module.scss";
import cn from "classnames";

const Burger: FC = () => {
  const { menu, toggleMenu } = useContext(UIContext);
  return (
    <div
      className={cn(styles.burger, {
        [styles.active]: menu,
      })}
      onClick={() => toggleMenu()}
    >
      <span className={styles.line}></span>
    </div>
  );
};

export default Burger;
