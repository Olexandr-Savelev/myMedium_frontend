import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import UserPageComponent from "../../../components/UserPage/UserPageComponent";

import { IUser, IUserPageProps } from "../../../pageInterfaces/UserPageProps";

const UserPage: NextPage<IUserPageProps> = ({ user }) => {
  return <UserPageComponent user={user} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user: IUser) => ({
    params: {
      userSlug: "" + user.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  userSlug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { userSlug } = params as IParams;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userSlug}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};

export default UserPage;
