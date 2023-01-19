import { FC, useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { IAlbumItem } from "../../pageInterfaces/AlbumPageProps";

const AlbumItem: FC<IAlbumItem> = ({ ...albumItem }) => {
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
      initial={"hidden"}
      variants={postVariants}
    >
      <div className="flex justify-between">
        <h2 className="text-gray-800 text-3xl font-semibold">
          {albumItem.title}
        </h2>
        <Link href={`/photos?albumId=${albumItem.id}`}>
          <a className="inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">
            Details
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default AlbumItem;
