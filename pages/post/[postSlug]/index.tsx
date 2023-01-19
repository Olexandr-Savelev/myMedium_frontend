import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import { useRouter } from "next/router";

import PostPageComponent from "../../../components/PostPage/PostPageComponent";
import Spinner from "../../../components/Spinner/Spinner";

import { getPosts, getSinglePost } from "../../../services/posts-service";
import { IPostItem } from "../../../pageInterfaces/IndexPageProps";
import { IPostPageProps } from "../../../pageInterfaces/PostPageProps";

const PostPage: NextPage<IPostPageProps> = ({ postItem }) => {
  const router = useRouter();

  if (router.isFallback) return <Spinner />;
  return <PostPageComponent postItem={postItem} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
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

  const postItem = await getSinglePost(postSlug);

  return {
    props: {
      postItem,
    },
  };
};

export default PostPage;
