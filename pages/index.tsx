import { GetStaticProps, NextPage } from "next";

import Hero from "../components/Hero/Hero";
import PostList from "../components/PostList/PostList";
import { Slider } from "../components/Slider/Slider";
import UsersList from "../components/UsersLIst/UsersList";

import { IndexPageProps } from "../pageInterfaces/IndexPageProps";
import TopPosts from "../components/PostList/TopPosts/TopPosts";

const Home: NextPage<IndexPageProps> = ({ postList, usersList }) => {
  return (
    <>
      <Hero />
      <Slider />
      <TopPosts posts={postList.slice(0, 6)} />
      <div className="flex gap-4">
        <div className="flex-auto w-[65%]">
          <PostList postList={postList} />
        </div>
        <div className="flex-auto w-[35%] max-h-[100vh] overflow-y-scroll px-4 pb-4 border-slate-400 position: sticky top-[78px]">
          <UsersList usersList={usersList} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const postList = await postResponse.json();

  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const usersList = await usersResponse.json();

  return {
    props: {
      postList,
      usersList,
    },
  };
};

export default Home;
