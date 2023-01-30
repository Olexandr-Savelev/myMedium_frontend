import { FC, useState } from "react";

import PhotoModalContent from "./PhotoModalContent/PhotoModalContent";
import PhotoItem from "./PhotoItem/PhotoItem";
import AnimatedModal from "../AnimatedModal/AnimatedModal";

import { IPhotoItem, IPhotosPage } from "../../pageInterfaces/PhotoPageProps";

const PhotosPageComponent: FC<IPhotosPage> = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState<IPhotoItem | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const onModalClose = () => {
    setModal(false);
  };

  const onModalOpen = (photo: IPhotoItem) => {
    setCurrentPhoto(photo), setModal(true);
  };

  return (
    <div className="max-w-6xl p-2 py-4 mx-auto grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <AnimatedModal isOpen={modal}>
        <PhotoModalContent
          photo={currentPhoto!}
          onModalClose={onModalClose}
        />
      </AnimatedModal>
      {photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          setModal={onModalOpen}
        />
      ))}
    </div>
  );
};

export default PhotosPageComponent;
