import { IPostItem } from "../../pageInterfaces/IndexPageProps";
import Link from "next/link";
import styles from "./PostItem.module.scss";
import { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TopPostItemProps extends IPostItem {
  place?: number;
}

const PostItem: FC<TopPostItemProps> = ({ place, ...postItem }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const postVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={place ? "visible" : "hidden"}
      variants={postVariants}
    >
      <div className={styles.post}>
        <h3 className={styles.title}>
          {place && <span className={styles.post_number}>{place}</span>}
          <Link href={`post/${postItem.id}`}>
            <a>{postItem.title}</a>
          </Link>
        </h3>
        <p className={styles.text}>{postItem.body}</p>
      </div>
    </motion.div>
  );
};

export default PostItem;
