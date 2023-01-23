import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { useAuth } from "../../hooks/useAuth";

import CommentItem from "./CommentItem/CommentItem";
import CommentModal from "./CommentModal/CommentModal";

import { IComment, IPostPageProps } from "../../pageInterfaces/PostPageProps";
import Spinner from "../Spinner/Spinner";

const PostPageComponent: FC<IPostPageProps> = ({ postItem, user }) => {
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
        <div className="flex justify-between items-center mt-3">
          <p>
            Author:{" "}
            <Link
              href={`/users/${user.id}`}
              passHref
            >
              <a className="font-bold text-xl text-slate-800 hover:text-slate-500">
                {user.name}
              </a>
            </Link>
          </p>

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center uppercase"
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
