import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { useAuth } from "../../hooks/useAuth";

import CommentItem from "./CommentItem/CommentItem";
import CommentModal from "./CommentModal/CommentModal";

import { IComment, IPostPageProps } from "../../pageInterfaces/PostPageProps";
import Spinner from "../Spinner/Spinner";

const PostPageComponent: FC<IPostPageProps> = ({ postItem }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setCommets] = useState<IComment[]>([]);
  const firebaseUser = useAuth();

  const addNewComment = (comment: IComment) => {
    setCommets((comments) => [...comments, comment]);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
      .then((res) =>
        res.json().then((comments) => {
          setCommets(comments), setLoading(false);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-2">
      <div className="flex flex-col p-8 w-full border-[1px] border-slate-400 my-4 shadow-md">
        <h3 className="text-center text-xl font-bold uppercase">
          {postItem.title}
        </h3>
        <p className="text-slate-700 text-md leading-relaxed">
          {postItem.body}
        </p>
        <div>
          <button
            className="bg-slate-500 text-white active:bg-slate-500 hover:bg-slate-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-3 cursor-pointer disabled:opacity-75 disabled:hover:bg-slate-500 disabled:cursor-auto"
            onClick={() => {
              setIsModalOpen(true);
            }}
            title={firebaseUser ? "Add Comment" : "Not authorized"}
            data-bs-toggle="modal"
            data-bs-target="#exampleModalScrollable"
            disabled={!firebaseUser}
          >
            Add comment
          </button>
        </div>
        {isModalOpen && (
          <CommentModal
            post={postItem}
            setIsModalOpen={setIsModalOpen}
            addNewComment={addNewComment}
          />
        )}
      </div>
      {firebaseUser ? (
        <ul className="flex flex-col">
          <span className="text-gray-600 text-2xl font-semibold">
            Comments:
          </span>
          {loading && <Spinner />}
          {comments.map(
            (comment: IComment): JSX.Element => (
              <li
                key={comment.id}
                className="flex justify-center mb-3"
              >
                <CommentItem {...comment} />
              </li>
            )
          )}
        </ul>
      ) : (
        <span className="text-gray-600 text-2xl font-semibold">
          To see and leave comments please{" "}
          <Link href={"/registration"}>
            <a className="text-blue-700 font-light hover:underline">register</a>
          </Link>{" "}
          or{" "}
          <Link href={"/signin"}>
            <a className="text-blue-700 font-light hover:underline">log in</a>
          </Link>
        </span>
      )}
    </div>
  );
};

export default PostPageComponent;
