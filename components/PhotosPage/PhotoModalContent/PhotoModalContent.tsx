import Image from "next/image";
import { FC } from "react";

import { IPhotoItem } from "../../../pageInterfaces/PhotoPageProps";

interface IPhotoModalContent {
  photo: IPhotoItem;
  closeModal: () => void;
}

const PhotoModalContent: FC<IPhotoModalContent> = ({ photo, closeModal }) => {
  function loaderProp({ src }: { src: string }) {
    return src;
  }
  // max-w-sm sm:max-w-md
  // w-[calc(100vw-40px)]
  return (
    <div className="overflow-x-hidden relative mx-auto md:w-auto md:h-auto">
      <div className="border-0 bg-white overflow-y-auto rounded-lg shadow-lg relative flex flex-col max-h-[90vh] w-[90vw] p-2 sm:w-auto">
        <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t md:h-auto">
          <h3 className="text-2xl text-slate-800 font-semibold m-0 sm:text-3xl mr-2">
            {photo.title}
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-80"
            onClick={() => closeModal()}
          >
            &#10006;
          </button>
        </div>
        <div className="relative flex-auto">
          <Image
            className="object-cover w-full rounded-lg h-96 md:h-auto"
            src={photo.url}
            alt={photo.title}
            width={600}
            height={600}
            layout="responsive"
            unoptimized={true}
            loader={loaderProp}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoModalContent;
