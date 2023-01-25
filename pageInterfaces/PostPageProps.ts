import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { IPostItem } from "./IndexPageProps";
import { IUser } from "./UserPageProps";

export interface IPostPageProps {
  postItem: IPostItem;
  user: IUser;
}

export interface ICurrentPostProps {
  postItem: IPostItem;
  firebaseUser: User | null;
  user: IUser;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ICommentListProps {
  comments: IComment[];
  loading: boolean;
  firebaseUser: User | null;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
