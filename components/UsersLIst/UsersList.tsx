import { FC } from "react";

import { UserItem } from "./UserItem";

import { TopUsersListProps } from "../../pageInterfaces/IndexPageProps";
import { IUser } from "../../pageInterfaces/UserPageProps";

const UsersList: FC<TopUsersListProps> = ({ usersList }) => {
  return (
    <>
      <h3 className="text-gray-600 text-2xl font-semibold mb-2">Users:</h3>
      <ul className="flex flex-col gap-2 sm:flex-row flex-wrap">
        {usersList.map((user: IUser) => (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
