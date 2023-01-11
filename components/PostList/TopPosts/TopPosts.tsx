import React, { FC } from "react";
import { IPostItem } from "../../../pageInterfaces/IndexPageProps";
import PostItem from "../../PostItem/PostItem";

interface ITopPostsProps {
  posts: IPostItem[];
}

const TopPosts: FC<ITopPostsProps> = ({ posts }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-[20px] m-2 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 mb-4">
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          {...post}
          place={index + 1}
        />
      ))}
    </div>
  );
};

export default TopPosts;
