import { GetStaticProps, NextPage } from "next";

import Hero from "../components/Hero/Hero";
import PostList from "../components/PostList/PostList";
import { Slider } from "../components/Slider/Slider";
import UsersList from "../components/UsersLIst/UsersList";

import { IndexPageProps } from "../pageInterfaces/IndexPageProps";
import TopPosts from "../components/PostList/TopPosts/TopPosts";
import { getAllUsers } from "../services/users-service";
import { getPosts } from "../services/posts-service";

const Home: NextPage<IndexPageProps> = ({ postList, usersList }) => {
  return (
    <>
      <Hero />
      <Slider />
      <TopPosts posts={postList.slice(0, 6)} />
      <div className="flex gap-4 px-2">
        <div className="flex-auto w-[65%]">
          <PostList postList={postList} />
        </div>
        <div className="flex-auto w-[35%] max-h-[100vh] overflow-y-auto px-4 pb-4 border-slate-400 position: sticky top-[78px]">
          <UsersList usersList={usersList} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postList = await getPosts(6);
  const usersList = await getAllUsers();

  return {
    props: {
      postList,
      usersList,
    },
  };
};

export default Home;
