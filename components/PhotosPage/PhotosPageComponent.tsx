import { FC, useState } from "react";

import PhotoModal from "./PhotoModal/PhotoModal";

import { IPhotoItem, IPhotosPage } from "../../pageInterfaces/PhotoPageProps";
import PhotoItem from "./PhotoItem/PhotoItem";

const PhotosPageComponent: FC<IPhotosPage> = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState<IPhotoItem | null>(null);

  return (
    <div className="max-w-6xl p-2 py-4 mx-auto grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {currentPhoto && (
        <PhotoModal
          photo={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
        />
      )}
      {photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          setPhoto={setCurrentPhoto}
        />
      ))}
    </div>
  );
};

export default PhotosPageComponent;
