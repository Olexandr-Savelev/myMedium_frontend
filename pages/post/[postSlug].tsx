import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import PostPageComponent from "../../components/PostPage/PostPageComponent";
import { IPostPageProps } from "../../pageInterfaces/PostPageProps";

const PostPage: NextPage<IPostPageProps> = ({ postItem, comments }) => {
  const router = useRouter();

  if (router.isFallback)
    return <h2 style={{ textAlign: "center" }}>LOADING...</h2>;
  return (
    <PostPageComponent
      postItem={postItem}
      comments={comments}
    />
  );
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

  const commetsRes = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=10"
  );
  const comments = await commetsRes.json();

  return {
    props: { postItem, comments },
  };
};

export default PostPage;
