import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { IComment, IPostPageProps } from "../../pageInterfaces/PostPageProps";

const PostPageComponent: FC<IPostPageProps> = ({ postItem }) => {
  const [comments, setCommets] = useState<IComment[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
      .then((res) => res.json().then((comments) => setCommets(comments)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-2">
      <div className="flex flex-col p-8 w-full border-[1px] border-slate-400 my-4 shadow-md">
        <h3 className="text-center text-xl font-bold uppercase">
          {postItem.title}
        </h3>
        <p>{postItem.body}</p>
        <div>
          <Link href={`/users/${postItem.userId}`}>
            <a className="inline-block mt-3 px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">
              User Page
            </a>
          </Link>
        </div>
      </div>
      <ul className="flex flex-col">
        <span className="text-gray-600 text-2xl font-semibold">Comments:</span>
        {comments.map(
          (comment: IComment): JSX.Element => (
            <li
              key={comment.id}
              className="flex justify-center mb-3"
            >
              <div className="rounded-lg shadow-lg bg-white min-w-[100%]">
                <div className="p-4">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Name: {comment.name}
                  </h5>
                  <h5 className="text-gray-800 text-xl font-medium mb-2">
                    Email: {comment.email}
                  </h5>
                  <p className="text-gray-700 text-base mb-2">{comment.body}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PostPageComponent;
