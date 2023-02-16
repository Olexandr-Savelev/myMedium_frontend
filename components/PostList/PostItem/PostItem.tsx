import { FC } from "react";
import Link from "next/link";

import { IPostItem } from "../../../pageInterfaces/IndexPageProps";

interface TopPostItemProps extends IPostItem {
  place?: number;
}

const PostItem: FC<TopPostItemProps> = ({ place, ...postItem }) => {
  return (
    <div className="w-full flex flex-col justify-between py-2 px-2 bg-white shadow-lg rounded-lg my-4 md:py-4 md:px-8">
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">
          {postItem.title}
        </h2>
        <p className="mt-2 text-gray-600">{postItem.body}</p>
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/post/${postItem.id}`}>
          <a className="mt-2 text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center uppercase block w-full">
            Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
