import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: ReactNode;
}

const Portal: FC<IPortalProps> = ({ children }) => {
  const portalRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted && portalRef.current
    ? createPortal(children, portalRef.current)
    : null;
};

export default Portal;
