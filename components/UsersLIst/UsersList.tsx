import { FC } from "react";
import { IUser, TopUsersListProps } from "../../pageInterfaces/IndexPageProps";
import { UserItem } from "./UserItem";

const UsersList: FC<TopUsersListProps> = ({ usersList }) => {
  return (
    <>
      <h3 className="text-gray-600 text-2xl font-semibold">Users:</h3>
      <ul className="flex flex-wrap">
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
