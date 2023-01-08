import { useRouter } from "next/router";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const UIContext = createContext<IUIContext>(null!);

type ContextProps = {
  children: ReactNode;
};

interface IUIContext {
  ref: (node?: Element | null | undefined) => void;
  isStickyHeader: boolean;
}

const UIPovider: FC<ContextProps> = ({ children }) => {
  const router = useRouter();
  const [isStickyHeader, setIsStickyHeader] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (router.asPath !== "/") {
      setIsStickyHeader(false);
    } else {
      inView ? setIsStickyHeader(false) : setIsStickyHeader(true);
    }
  }, [inView]);

  const value = {
    ref,
    isStickyHeader,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIPovider;
