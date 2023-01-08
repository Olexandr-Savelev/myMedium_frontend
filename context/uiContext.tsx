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
}

const UIPovider: FC<ContextProps> = ({ children }) => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== "/") {
      setIsHeaderSticky(false);
    }
  }, [router.asPath]);

  const value = {
    isHeaderSticky,
    setIsHeaderSticky,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIPovider;
