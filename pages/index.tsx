import { NextPage } from "next";
import Hero from "../components/Hero/Hero";
import PostList from "../components/PostList/PostList";
import { Slider } from "../components/Slider/Slider";
import { PostListProps } from "../pageInterfaces/IndexPageProps";

const Home: NextPage<PostListProps> = ({ postList }) => {
  return (
    <div>
      <Hero />
      <Slider />
      <PostList postList={postList} />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const postList = await response.json();

  return {
    props: {
      postList,
    },
  };
};

export default Home;
