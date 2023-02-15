import Portal from "components/Portal/Portal";
import { AnimatePresence, motion } from "framer-motion";
import useKeydown from "hooks/useKeydown";
import {
  FC,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface IAnimatedModalProps {
  children: PropsWithChildren<ReactNode>;
  isOpen: boolean;
  closeModal(e: MouseEvent): void;
}

const AnimatedModal: FC<IAnimatedModalProps> = ({
  children,
  isOpen,
  closeModal,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const callHandlerOnOutsideClick = (event: any) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(event.target as Node)) {
          closeModal(event);
        }
      }
    };

    document.addEventListener("click", callHandlerOnOutsideClick);
    return () => {
      document.removeEventListener("click", callHandlerOnOutsideClick);
    };
  });

  useKeydown({
    Escape: closeModal,
  });

  return (
    <Portal>
      <div className="z-20 fixed inset-0 w-screen h-screen pointer-events-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="fixed inset-0 bg-black opacity-25 z-20 overflow-y-hidden h-screen"></div>
              <div
                className="fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-30"
                ref={modalRef}
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Portal>
  );
};

export default AnimatedModal;
