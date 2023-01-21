import { FC, useEffect, useState } from "react";

import { debounce } from "lodash";

import SearchList from "./SearchList/SearchList";

import { IPostItem } from "../../../pageInterfaces/IndexPageProps";

const Search: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [list, setList] = useState<boolean>(false);
  const [foundPosts, setFoundPosts] = useState<IPostItem[]>([]);

  const onPostClick = () => {
    setList(false);
  };

  useEffect(() => {
    const queryString = query.replace(/\s/g, "%20");
    if (query.length !== 0) {
      debounedSearch(queryString);
    } else {
      setFoundPosts([]), setList(false);
    }
  }, [query]);

  const search = (queryString: string) => {
    if (!list) {
      setList(true);
    }
    fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=${queryString}`
    ).then((res) => res.json().then((posts) => setFoundPosts(posts)));
  };

  const debounedSearch = debounce(search, 500);

  return (
    <div className="flex items-center relative w-auto">
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
            className="w-5 h-5 text-slate-600"
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
          onFocus={() => {
            query ? setList(true) : setList(false);
          }}
          onBlur={() => setList(false)}
          className="bg-gray-50 border-2 border-blue-200 text-slate-700 text-sm rounded-xl outline-none block  pl-10 p-2.5 transition-all focus:border-blue-500 w-28 focus:w-56"
          id="simple-search"
          placeholder="Search"
        />
      </div>
      {list && (
        <SearchList
          posts={foundPosts}
          onPostClick={onPostClick}
        />
      )}
    </div>
  );
};

export default Search;
