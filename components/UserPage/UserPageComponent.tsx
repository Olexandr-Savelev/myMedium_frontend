import { FC } from "react";
import { IUserPageProps } from "../../pageInterfaces/UserPageProps";

const UserPageComponent: FC<IUserPageProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default UserPageComponent;
