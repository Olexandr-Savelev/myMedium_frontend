import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import { useRouter } from "next/router";

import PostPageComponent from "../../components/PostPage/PostPageComponent";
import { IPostPageProps } from "../../pageInterfaces/PostPageProps";

const PostPage: NextPage<IPostPageProps> = ({ postItem }) => {
  const router = useRouter();

  if (router.isFallback)
    return <h2 style={{ textAlign: "center" }}>LOADING...</h2>;
  return <PostPageComponent postItem={postItem} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { postSlug: "sth" } },
      { params: { postSlug: "sth-else" } },
    ],
    fallback: true,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { postSlug } = context.params as IParams;
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postSlug}`
  );
  const postItem = await postRes.json();

  return {
    props: {
      postItem,
    },
  };
};

export default PostPage;
