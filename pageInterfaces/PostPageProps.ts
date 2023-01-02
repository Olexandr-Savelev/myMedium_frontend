import { PostItemProps } from "./IndexPageProps";

export interface IPostPageProps {
  postItem: PostItemProps;
  comments: IComment[];
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
