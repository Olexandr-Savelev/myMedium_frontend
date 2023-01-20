import { FC } from "react";
import Image from "next/image";

import { IPhotosPage } from "../../pageInterfaces/PhotoPageProps";

const PhotosPageComponent: FC<IPhotosPage> = ({ photos }) => {
  function loaderProp<T extends { src: string }>({ src }: T) {
    return src;
  }
  return (
    <div className="max-w-6xl p-2 py-4 mx-auto grid gap-3 md:grid-cols-2">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="flex flex-col items-center bg-white border rounded-lg shadow-md w-full mb-3"
        >
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
            src={photo.url}
            alt={photo.title}
            width={600}
            height={600}
            loader={loaderProp}
            loading="lazy"
          />
          <h5 className="mb-2 p-3 text-2xl font-bold tracking-tight text-gray-900">
            {photo.title}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default PhotosPageComponent;
