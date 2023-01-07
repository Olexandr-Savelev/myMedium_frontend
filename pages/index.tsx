import { useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import { GetStaticProps, NextPage } from "next";

import Hero from "../components/Hero/Hero";
import PostList from "../components/PostList/PostList";
import { Slider } from "../components/Slider/Slider";
import TopUsersList from "../components/TopUsersLIst/TopUsersList";

import { IndexPageProps } from "../pageInterfaces/IndexPageProps";
import Header from "../components/Header/Header";

const Home: NextPage<IndexPageProps> = ({ postList, usersList }) => {
  const [isStickyHeader, setIsStickyHeader] = useState(false);

  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange((latest: any) => {
      if (latest > 500) {
        setIsStickyHeader(true);
      } else {
        setIsStickyHeader(false);
      }
    });
  }, []);

  return (
    <>
      {isStickyHeader && <Header isSticky={isStickyHeader} />}
      <Hero />
      <Slider />
      <div className="flex gap-4">
        <div className="flex-auto w-[65%]">
          <PostList postList={postList} />
        </div>
        <div className="flex-auto w-[35%] max-h-[50vh] border-solid border-b-[1px] px-4 pb-4  border-slate-400 position: sticky top-[70px]">
          <TopUsersList usersList={usersList} />
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
    "https://jsonplaceholder.typicode.com/users?_limit=6"
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
