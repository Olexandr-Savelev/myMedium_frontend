import { FC } from "react";
import { TopUsersListProps } from "../../pageInterfaces/IndexPageProps";
import { TopUserItem } from "./TopUserItem";

const TopUsersList: FC<TopUsersListProps> = ({ usersList }) => {
  return (
    <>
      <h3 className="text-center">Top users:</h3>
      <ul className="flex flex-wrap">
        {usersList.map((user) => (
          <li key={user.id}>
            <TopUserItem userName={user.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopUsersList;
