export interface IPhotosPage {
  photos: IPhotoItem[];
}

export interface IPhotoItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
