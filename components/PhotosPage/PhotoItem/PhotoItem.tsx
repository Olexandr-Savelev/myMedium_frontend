import { FC } from "react";
import Image from "next/image";

import { IPhotoItem } from "../../../pageInterfaces/PhotoPageProps";

interface IPhotoItemComponent {
  photo: IPhotoItem;
  setModal: (photo: IPhotoItem) => void;
}

const PhotoItem: FC<IPhotoItemComponent> = ({ photo, setModal }) => {
  function loaderProp({ src }: { src: string }) {
    return src;
  }

  return (
    <div
      key={photo.id}
      onClick={() => {
        setModal(photo);
      }}
      className="flex flex-col items-center bg-white border rounded-lg shadow-lg w-full mb-3 cursor-pointer hover:shadow-none"
    >
      <Image
        className="object-cover w-full rounded-lg h-96 md:h-auto"
        src={photo.url}
        alt={photo.title}
        width={600}
        height={600}
        unoptimized={true}
        loader={loaderProp}
        loading="lazy"
      />
      <h5 className="mb-2 p-3 text-lg font-semibold tracking-tight text-gray-900 md:text-2xl">
        {photo.title}
      </h5>
    </div>
  );
};

export default PhotoItem;
