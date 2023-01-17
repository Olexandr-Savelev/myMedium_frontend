import { FC, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { PostListProps } from "../../pageInterfaces/IndexPageProps";
import PostItem from "../PostItem/PostItem";
import Spinner from "../Spinner/Spinner";

const PostList: FC<PostListProps> = ({ postList }) => {
  const [posts, setPosts] = useState(postList);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${posts.length}&_limit=9`
    );
    const newPosts = await response.json();

    newPosts.length !== 0
      ? setPosts((post) => [...post, ...newPosts])
      : setHasMore(false);
  };

  return (
    <InfiniteScroll
      style={{ overflow: "visible" }}
      dataLength={posts.length}
      next={getMorePost}
      hasMore={hasMore}
      loader={<Spinner />}
      endMessage={<p style={{ textAlign: "center" }}>NO MORE POSTS</p>}
    >
      <div className="flex gap-[15px] flex-col">
        {posts.map((postItem) => {
          return (
            <PostItem
              key={postItem.id}
              {...postItem}
            />
          );
        })}
      </div>
    </InfiniteScroll>
  );
};
export default PostList;
