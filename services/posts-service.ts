import { IPostItem } from "../pageInterfaces/IndexPageProps";

export const getPosts = async (
  limit?: number
): Promise<IPostItem[] | undefined> => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts${
        limit ? `?_limit=${limit}` : ""
      }`
    );
    const users: IPostItem[] = await res.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (
  id: string
): Promise<IPostItem | undefined> => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return post;
  } catch (error) {
    console.log(error);
  }
};
