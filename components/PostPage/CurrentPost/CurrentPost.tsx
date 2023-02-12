import React, { FC } from "react";
import Link from "next/link";

import { ICurrentPostProps } from "../../../pageInterfaces/PostPageProps";

const CurrentPost: FC<ICurrentPostProps> = ({
  postItem,
  firebaseUser,
  user,
  setIsModalOpen,
}) => {
  return (
    <div className="flex flex-col p-3 w-full border-[1px] border-slate-400 my-4 shadow-md sm:p-8">
      <h3 className="text-center text-xl font-bold uppercase sm:text-2xl">
        {postItem.title}
      </h3>
      <p className="text-slate-700 text-md leading-relaxed">{postItem.body}</p>
      <div className="flex flex-col gap-4 items-center mt-3">
        <p className="font-semibold text-xl text-slate-600 ">
          Author:{" "}
          <Link
            href={`/users/${user.id}`}
            passHref
          >
            <a className="font-bold text-xl text-slate-800 hover:text-slate-500 hover:underline sm:text-2xl">
              {user.name}
            </a>
          </Link>
        </p>

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center uppercase cursor-pointer outline-none block w-full sm:w-auto disabled:cursor-auto disabled:bg-blue-300 disabled:hover:bg-blue-300"
          onClick={() => {
            setIsModalOpen(true);
          }}
          title={firebaseUser ? "Add Comment" : "Not authorized"}
          disabled={!firebaseUser}
        >
          Add comment
        </button>
      </div>
    </div>
  );
};

export default CurrentPost;
