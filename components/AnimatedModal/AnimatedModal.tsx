import { CSSProperties, FC, PropsWithChildren, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";

import { useMounted } from "../../hooks/useMounted";

interface IAnimatedModalProps {
  children: PropsWithChildren<ReactNode>;
  isOpen: boolean;
}

interface ITransitionStyles {
  [id: string]: CSSProperties;
}

const AnimatedModal: FC<IAnimatedModalProps> = ({ children, isOpen }) => {
  const mounted = useMounted(isOpen);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);
  if (!mounted) return null;

  const duration = 300;

  const layoutDefaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const layoutTransitionStyles: ITransitionStyles = {
    entering: { opacity: 0.3 },
    entered: { opacity: 0.3 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const contentDefaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const contentTransitionStyles: ITransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      {createPortal(
        <>
          <Transition
            nodeRef={layoutRef}
            in={isOpen}
            timeout={duration}
          >
            {(state) => (
              <div
                ref={layoutRef}
                className="fixed inset-0 z-20 bg-black"
                style={{
                  ...layoutDefaultStyle,
                  ...layoutTransitionStyles[state],
                }}
              ></div>
            )}
          </Transition>
          <Transition
            nodeRef={childRef}
            in={isOpen}
            timeout={duration}
          >
            {(state) => (
              <div
                ref={childRef}
                style={{
                  ...contentDefaultStyle,
                  ...contentTransitionStyles[state],
                }}
              >
                {children}
              </div>
            )}
          </Transition>
        </>,
        document.body
      )}
    </>
  );
};

export default AnimatedModal;
