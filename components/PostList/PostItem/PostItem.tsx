import { FC, useEffect } from "react";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { IPostItem } from "../../../pageInterfaces/IndexPageProps";

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
      className="w-full flex flex-col justify-between py-4 px-8 bg-white shadow-lg rounded-lg my-4"
      ref={ref}
      animate={controls}
      initial={place ? "visible" : "hidden"}
      variants={postVariants}
    >
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">
          {postItem.title}
        </h2>
        <p className="mt-2 text-gray-600">{postItem.body}</p>
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/post/${postItem.id}`}>
          <a className="mt-2 text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center uppercase">
            Details
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostItem;
