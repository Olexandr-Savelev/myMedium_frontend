import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhotosPageComponent from "../components/PhotosPage/PhotosPageComponent";
import Spinner from "../components/Spinner/Spinner";
import { IPhotoItem } from "../pageInterfaces/PhotoPageProps";

const PhotosPage: NextPage = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState<IPhotoItem[]>([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${router.query.albumId}`
    ).then((res) => res.json().then((photos) => setPhotos(photos)));
  }, [router.query.albumId]);

  if (photos.length === 0) return <Spinner />;
  return <PhotosPageComponent photos={photos} />;
};

export default PhotosPage;
