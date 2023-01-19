import Image from "next/image";
import { FC } from "react";
import { IPhotosPage } from "../../pageInterfaces/PhotoPageProps";

const PhotosPageComponent: FC<IPhotosPage> = ({ photos }) => {
  function loaderProp<T extends { src: string }>({ src }: T) {
    return src;
  }
  return (
    <div className="max-w-5xl mx-auto mt-3 px-2">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="flex flex-col items-center bg-white border rounded-lg shadow-md w-full md:flex-row mb-3"
        >
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={photo.url}
            alt={photo.title}
            width={600}
            height={600}
            loader={loaderProp}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {photo.title}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotosPageComponent;
