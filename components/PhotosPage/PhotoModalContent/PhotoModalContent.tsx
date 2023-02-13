import useKeydown from "hooks/useKeydown";
import useOutsideClick from "hooks/useOutsideClick";
import Image from "next/image";
import { FC, useState } from "react";

import { IPhotoItem } from "../../../pageInterfaces/PhotoPageProps";

interface IPhotoModalContent {
  photo: IPhotoItem;
  onModalClose: () => void;
}

const PhotoModalContent: FC<IPhotoModalContent> = ({ photo, onModalClose }) => {
  const [modalNode, setModalNode] = useState<HTMLDivElement | null>(null);

  function loaderProp({ src }: { src: string }) {
    return src;
  }

  useOutsideClick(modalNode, onModalClose);

  useKeydown({
    Escape: onModalClose,
  });

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none">
      <div className="relative my-6 mx-auto max-w-sm sm:max-w-md md:max-w-3xl md:h-auto">
        <div
          className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-[90vh] bg-white outline-none focus:outline-none p-2"
          ref={(node) => {
            setModalNode(node);
          }}
        >
          <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t md:h-auto">
            <h3 className="text-2xl text-slate-800 font-semibold m-0 sm:text-3xl mr-2">
              {photo.title}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-80"
              onClick={() => onModalClose()}
            >
              &#10006;
            </button>
          </div>
          <div className="relative flex-auto">
            <Image
              className="object-cover w-full rounded-lg h-96 md:h-auto"
              src={photo.url}
              alt={photo.title}
              layout="fill"
              unoptimized={true}
              loader={loaderProp}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModalContent;
