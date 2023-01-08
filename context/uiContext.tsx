import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
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
  const router = useRouter();
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  const value = {
    isHeaderSticky,
    setIsHeaderSticky,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIPovider;
