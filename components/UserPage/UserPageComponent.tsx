import { FC, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useFetch } from "../../hooks/useFetch";

import AnimatedItem from "components/AnimatedItem/AnimatedItem";
import AlbumItem from "../AlbumItem/AlbumItem";
import PostItem from "../PostList/PostItem/PostItem";
import Spinner from "../Spinner/Spinner";
import UserInfo from "./UserInfo.tsx/UserInfo";

import { IAlbumItem } from "../../pageInterfaces/AlbumPageProps";
import { IPostItem } from "../../pageInterfaces/IndexPageProps";
import { IUserPageProps } from "../../pageInterfaces/UserPageProps";

const UserPageComponent: FC<IUserPageProps> = ({ user }) => {
  const [url, setUrl] = useState<string>("");

  const transformUserName = () => {
    let userFirstName = user.name.split(" ")[0];
    if (
      userFirstName.toLowerCase() === "mrs." ||
      userFirstName[0].toLowerCase() === "mr."
    ) {
      userFirstName = user.name.split(" ").slice(0, 2).join(" ");
    }

    return userFirstName[userFirstName.length - 1] !== "s"
      ? userFirstName + "'s"
      : userFirstName;
  };

  const transformedUserName = useMemo(() => transformUserName(), [user]);

  const { data, loading, error } = useFetch<IPostItem[] | IAlbumItem[]>(url);

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div className="max-w-5xl mx-auto px-2 my-4">
        <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6">
          <div className="flex items-center gap-6 border-b border-slate-400 pb-3 mb-3">
            <Image
              className="rounded-full"
              src={"/main/avatar_placeholder.png"}
              width={80}
              height={80}
              alt="avatar"
            />
            <h3 className="text-4xl font-semibold tracking-tight text-gray-900">
              {user.name}
            </h3>
          </div>

          <UserInfo user={user} />
          <div className="flex gap-2">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
              onClick={() => {
                setUrl(
                  `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
                );
              }}
            >
              {transformedUserName} Posts
            </button>

            <button
              type="button"
              onClick={() => {
                setUrl(
                  `https://jsonplaceholder.typicode.com/users/${user.id}/albums`
                );
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {transformedUserName} Albums
            </button>
          </div>
          {loading && <Spinner />}
          {data && !loading && (
            <>
              {data.map((item: IPostItem | IAlbumItem) => {
                if ("body" in item) {
                  return (
                    <AnimatedItem key={item.id}>
                      <PostItem {...item} />
                    </AnimatedItem>
                  );
                } else {
                  return (
                    <AnimatedItem key={item.id}>
                      <AlbumItem {...item} />
                    </AnimatedItem>
                  );
                }
              })}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default UserPageComponent;
