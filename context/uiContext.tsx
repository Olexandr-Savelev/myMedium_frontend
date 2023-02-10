import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const UIContext = createContext<IUIContext>(null!);

type ContextProps = {
  children: ReactNode;
};

interface IUIContext {
  isHeaderSticky: boolean;
  setIsHeaderSticky: Dispatch<SetStateAction<boolean>>;
  menu: boolean;
  toggleMenu: () => void;
}

const UIPovider: FC<ContextProps> = ({ children }) => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const { route } = useRouter();

  const toggleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else setMenu(false);
  };

  useEffect(() => {
    if (route !== "/") {
      setIsHeaderSticky(false);
    }
  }, [route]);

  const value = {
    menu,
    toggleMenu,
    isHeaderSticky,
    setIsHeaderSticky,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIPovider;
