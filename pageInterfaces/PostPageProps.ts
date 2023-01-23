import { IPostItem } from "./IndexPageProps";
import { IUser } from "./UserPageProps";

export interface IPostPageProps {
  postItem: IPostItem;
  user: IUser;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
