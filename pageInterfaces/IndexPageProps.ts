import { IUser } from "./UserPageProps";

export interface IndexPageProps {
  postList: IPostItem[];
  usersList: IUser[];
}

export interface TopUsersListProps {
  usersList: IUser[];
}

export interface PostListProps {
  postList: IPostItem[];
}

export type IPostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
