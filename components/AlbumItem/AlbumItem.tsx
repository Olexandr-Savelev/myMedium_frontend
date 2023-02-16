import { FC } from "react";
import Link from "next/link";

import { IAlbumItem } from "../../pageInterfaces/AlbumPageProps";

const AlbumItem: FC<IAlbumItem> = ({ ...albumItem }) => {
  return (
    <div className="w-full flex flex-col justify-between p-3 bg-white shadow-lg rounded-lg my-4 sm:py-4 sm:px-8 sm:flex-row">
      <h2 className="mb-2 text-gray-800 text-xl font-semibold sm:m-0 sm:text-2xl">
        {albumItem.title}
      </h2>
      <Link href={`/photos?albumId=${albumItem.id}`}>
        <a className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center uppercase h-fit block w-full sm:w-auto">
          Photos
        </a>
      </Link>
    </div>
  );
};

export default AlbumItem;
