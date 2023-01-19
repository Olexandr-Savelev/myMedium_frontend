import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import UserPageComponent from "../../../components/UserPage/UserPageComponent";

import { IUser, IUserPageProps } from "../../../pageInterfaces/UserPageProps";
import { getAllUsers, getSingleUser } from "../../../services/users-service";

const UserPage: NextPage<IUserPageProps> = ({ user }) => {
  return <UserPageComponent user={user} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await getAllUsers();
  const paths = users!.map((user: IUser) => ({
    params: {
      userSlug: "" + user.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

interface IParams extends ParsedUrlQuery {
  userSlug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { userSlug } = params as IParams;
  const user = await getSingleUser(userSlug);

  return {
    props: {
      user,
    },
  };
};

export default UserPage;
