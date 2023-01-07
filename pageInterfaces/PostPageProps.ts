import { IPostItem } from "./IndexPageProps";

export interface IPostPageProps {
  postItem: IPostItem;
  comments: IComment[];
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
