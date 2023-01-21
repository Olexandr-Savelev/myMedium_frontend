import { FC, useState } from "react";
import Image from "next/image";

import PhotoModal from "./PhotoModal/PhotoModal";

import { IPhotoItem, IPhotosPage } from "../../pageInterfaces/PhotoPageProps";

const PhotosPageComponent: FC<IPhotosPage> = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState<IPhotoItem | null>(null);

  function loaderProp<T extends { src: string }>({ src }: T) {
    return src;
  }

  return (
    <div className="max-w-6xl p-2 py-4 mx-auto grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
      {currentPhoto && (
        <PhotoModal
          photo={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
        />
      )}
      {photos.map((photo) => (
        <>
          <div
            key={photo.id}
            onClick={() => setCurrentPhoto(photo)}
            className="flex flex-col items-center bg-white border rounded-lg shadow-md w-full mb-3 cursor-pointer hover:shadow-lg"
          >
            <Image
              className="object-cover w-full rounded-lg h-96 md:h-auto"
              src={photo.url}
              alt={photo.title}
              width={600}
              height={600}
              loader={loaderProp}
              loading="lazy"
            />
            <h5 className="mb-2 p-3 text-lg font-bold tracking-tight text-gray-900 md:text-2xl">
              {photo.title}
            </h5>
          </div>
        </>
      ))}
    </div>
  );
};

export default PhotosPageComponent;