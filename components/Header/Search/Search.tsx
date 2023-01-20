import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { IPostItem } from "../../../pageInterfaces/IndexPageProps";
import { debounce } from "lodash";
import SearchList from "./SearchList/SearchList";

const Search: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [list, setList] = useState<boolean>(false);
  const [foundPosts, setFoundPosts] = useState<IPostItem[]>([]);

  useEffect(() => {
    const queryString = query.replace(/\s/g, "%20");
    if (query.length !== 0) {
      debounedSearch(queryString);
    } else setFoundPosts([]);
  }, [query]);

  const search = (queryString: string) => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=${queryString}`
    ).then((res) => res.json().then((posts) => setFoundPosts(posts)));
  };

  const debounedSearch = debounce(search, 500);

  return (
    <div className="flex items-center relative w-64">
      <label
        htmlFor="simple-search"
        className="sr-only"
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={() => setList(true)}
          onBlur={() => setList(false)}
          className="bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-xl outline-none block w-auto pl-10 p-2.5 transition-all focus:border-1 focus:border-slate-700 focus:w-full"
          placeholder="Search Post"
        />
      </div>
      {list && <SearchList posts={foundPosts} />}
    </div>
  );
};

export default Search;
