import { FC, useEffect } from "react";
import Link from "next/link";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className="w-full flex flex-col justify-between p-3 bg-white shadow-lg rounded-lg my-4 sm:py-4 sm:px-8"
      ref={ref}
      animate={controls}
      initial={"hidden"}
      variants={postVariants}
    >
      <div className="sm:flex justify-between">
        <h2 className="mb-2 text-gray-800 text-xl font-semibold sm:m-0 sm:text-2xl">
          {albumItem.title}
        </h2>
        <Link href={`/photos?albumId=${albumItem.id}`}>
          <a className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center uppercase h-fit block w-full sm:w-auto">
            Photos
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default AlbumItem;
