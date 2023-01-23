import { FC } from "react";
import Link from "next/link";

import { IPostItem } from "../../../../pageInterfaces/IndexPageProps";

interface ISearchListProps {
  posts: IPostItem[];
  onPostClick: () => void;
}

const SearchList: FC<ISearchListProps> = ({ posts, onPostClick }) => {
  return (
    <ul
      className="absolute top-12 left-0 py-1 text-sm max-h-96 overflow-auto text-gray-700 dark:text-gray-200 bg-white rounded-md w-full scrollbar-thumb-slate-600 scrollbar-track-gray-100 scrollbar-thin"
      aria-labelledby="dropdown-button-2"
    >
      {posts.length ? (
        <>
          {posts.map((post) => (
            <li
              key={post.id}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => onPostClick()}
            >
              <Link href={`/post/${post.id}`}>
                <a className="inline-flex items-center w-full cursor-pointer px-4 py-2 text-sm box-border border-y border-white text-gray-700 hover:border-y hover:border-blue-300 hover:bg-blue-100">
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </>
      ) : (
        <div
          className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          No Posts Found
        </div>
      )}
    </ul>
  );
};

export default SearchList;
