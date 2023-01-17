import { IUser } from "../pageInterfaces/UserPageProps";

export const getAllUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = async (
  uid: string
): Promise<IUser | undefined> => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${uid}`
    );
    const user = await res.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};
