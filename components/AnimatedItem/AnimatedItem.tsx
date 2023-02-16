import { FC, ReactNode, useEffect } from "react";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IAnimatedItem {
  children: ReactNode;
  variants?: {
    visible: Variants;
    hidden: Variants;
  };
}

const AnimatedItem: FC<IAnimatedItem> = ({
  children,
  variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.5 },
  },
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={"hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
