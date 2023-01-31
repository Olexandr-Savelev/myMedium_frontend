import React, { FC, PropsWithChildren, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";

import { useMounted } from "../../hooks/useMounted";

interface IAnimatedModalProps {
  children: PropsWithChildren<ReactNode>;
  isOpen: boolean;
}

const AnimatedModal: FC<IAnimatedModalProps> = ({ children, isOpen }) => {
  const mounted = useMounted(isOpen);
  if (!mounted) return null;

  const duration = 300;

  const layoutDefaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const layoutTransitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 0.3 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {},
  };

  const contentDefaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const contentTransitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {},
  };

  return (
    <>
      {createPortal(
        <>
          <Transition
            in={isOpen}
            timeout={duration}
            mountOnEnter
            unmountOnExit
          >
            {(state) => (
              <div
                className="fixed inset-0 z-20 bg-black cursor-pointer"
                style={{
                  ...layoutDefaultStyle,
                  ...layoutTransitionStyles[state],
                }}
              ></div>
            )}
          </Transition>
          <Transition
            in={isOpen}
            timeout={duration}
            mountOnEnter
            unmountOnExit
          >
            {(state) => (
              <div
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
