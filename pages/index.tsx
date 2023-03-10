import { GetStaticProps, NextPage } from "next";

import Hero from "../components/Hero/Hero";
import PostList from "../components/PostList/PostList";
import { Slider } from "../components/Slider/Slider";
import UsersList from "../components/UsersLIst/UsersList";
import TopPosts from "../components/PostList/TopPosts/TopPosts";

import { IndexPageProps, IPostItem } from "../pageInterfaces/IndexPageProps";

const Home: NextPage<IndexPageProps> = ({ postList, usersList }) => {
  return (
    <>
      <Hero />
      <Slider />
      <TopPosts posts={postList.slice(0, 6)} />
      <div className="flex flex-col-reverse gap-4 px-2 sm:flex-row">
        <div className="flex-auto w-full sm:w-[65%]">
          <PostList postList={postList} />
        </div>
        <div className="flex-auto flex-rev w-full max-h-[100vh] px-4 pb-4 border-slate-400 sm:sticky sm:top-[78px] sm:w-[35%] sm:overflow-y-auto">
          <UsersList usersList={usersList} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const postList: IPostItem[] = await postsRes.json();

  const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersList = await usersRes.json();

  return {
    props: {
      postList,
      usersList,
    },
  };
};

export default Home;
