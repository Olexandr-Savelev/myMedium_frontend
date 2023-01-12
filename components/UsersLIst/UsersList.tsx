import { FC } from "react";
import { TopUsersListProps } from "../../pageInterfaces/IndexPageProps";
import { UserItem } from "./UserItem";

const UsersList: FC<TopUsersListProps> = ({ usersList }) => {
  return (
    <>
      <h3 className="text-center">Users:</h3>
      <ul className="flex flex-wrap">
        {usersList.map((user) => (
          <li key={user.id}>
            <UserItem userName={user.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
