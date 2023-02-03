import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import { useRouter } from "next/router";

import PostPageComponent from "../../../components/PostPage/PostPageComponent";
import Spinner from "../../../components/Spinner/Spinner";

import { IPostItem } from "../../../pageInterfaces/IndexPageProps";
import { IPostPageProps } from "../../../pageInterfaces/PostPageProps";
import { IUser } from "pageInterfaces/UserPageProps";

const PostPage: NextPage<IPostPageProps> = ({ postItem, user }) => {
  const router = useRouter();

  if (router.isFallback) return <Spinner />;
  return (
    <PostPageComponent
      postItem={postItem}
      user={user}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await postsRes.json();

  const paths = posts!.map((post: IPostItem) => ({
    params: { postSlug: "" + post.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

interface IParams extends ParsedUrlQuery {
  postSlug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { postSlug } = params as IParams;

  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postSlug}`
  );
  const postItem: IPostItem = await postRes.json();

  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postItem.userId}`
  );
  const user: IUser = await userRes.json();

  return {
    props: {
      postItem,
      user,
    },
  };
};

export default PostPage;
