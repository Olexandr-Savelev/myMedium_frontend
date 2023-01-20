import { FC } from "react";
import Link from "next/link";

import { IPostItem } from "../../../../pageInterfaces/IndexPageProps";

interface ISearchListProps {
  posts: IPostItem[];
}

const SearchList: FC<ISearchListProps> = ({ posts }) => {
  return (
    <ul
      className="py-1 text-sm max-h-[500px] overflow-auto text-gray-700 dark:text-gray-200 absolute bg-white top-11 left-0 rounded-md w-full"
      aria-labelledby="dropdown-button-2"
    >
      {posts.length ? (
        <>
          {posts.map((post) => (
            <li key={post.id}>
              <div
                onMouseDown={(event) => event.preventDefault()}
                className="inline-flex w-full px-4 py-2 text-sm box-border border-y border-white text-gray-700 transition-all hover:border-y hover:border-slate-300 hover:bg-gray-100"
              >
                <Link href={`/post/${post.id}`}>
                  <a className="inline-flex items-center w-full cursor-pointer">
                    {post.title}
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </>
      ) : (
        <div
          className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          No posts Found
        </div>
      )}
    </ul>
  );
};

export default SearchList;
