import { FC, useState } from "react";

import AlbumsItem from "../AlbumItem/AlbumItem";
import PostItem from "../PostItem/PostItem";
import Spinner from "../Spinner/Spinner";
import UserInfo from "./UserInfo.tsx/UserInfo";

import { IAlbumItem } from "../../pageInterfaces/AlbumPageProps";
import { IPostItem } from "../../pageInterfaces/IndexPageProps";
import { IUserPageProps } from "../../pageInterfaces/UserPageProps";

const UserPageComponent: FC<IUserPageProps> = ({ user }) => {
  const [userPosts, setUserPosts] = useState<IPostItem[]>([]);
  const [userAlbums, setUserAlbums] = useState<IAlbumItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const userPostsHandler = () => {
    setUserAlbums([]);
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(
      (res) =>
        res
          .json()
          .then((posts) => {
            setUserPosts(posts);
          })
          .finally(() => setLoading(false))
    );
  };

  const userAlbumsHandler = () => {
    setUserPosts([]);
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`).then(
      (res) =>
        res
          .json()
          .then((albums) => {
            setUserAlbums(albums);
          })
          .finally(() => setLoading(false))
    );
  };

  return (
    <div className="max-w-5xl mx-2 p-3 bg-white border border-gray-200 rounded-lg shadow-md mx-auto mt-3 sm:p-6">
      <h3 className="text-4xl font-semibold tracking-tight text-gray-900 border-b border-slate-400 pb-3 mb-3 ">
        {user.name}
      </h3>
      <UserInfo user={user} />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            userPostsHandler();
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          User Posts
        </button>

        <button
          type="button"
          onClick={() => {
            userAlbumsHandler();
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          User Albums
        </button>
      </div>
      {loading && <Spinner />}
      {userPosts && (
        <>
          {userPosts.map((post) => (
            <PostItem
              key={post.id}
              {...post}
            />
          ))}
        </>
      )}
      {userAlbums && (
        <>
          {userAlbums.map((album) => (
            <AlbumsItem
              key={album.id}
              {...album}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default UserPageComponent;
