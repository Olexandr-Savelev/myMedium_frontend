import { FC } from "react";
import Link from "next/link";

import Spinner from "../../Spinner/Spinner";
import CommentItem from "../CommentItem/CommentItem";

import {
  IComment,
  ICommentListProps,
} from "../../../pageInterfaces/PostPageProps";

const CommentList: FC<ICommentListProps> = ({
  loading,
  comments,
  firebaseUser,
}) => {
  if (!firebaseUser) {
    return (
      <div className="text-gray-600 text-2xl font-semibold text-center">
        To see and leave comments please{" "}
        <Link href={"/registration"}>
          <a className="text-blue-700 font-bold uppercase hover:text-blue-500 hover:underline">
            register
          </a>
        </Link>{" "}
        or{" "}
        <Link href={"/signin"}>
          <a className="text-blue-700 font-bold uppercase hover:text-blue-500 hover:underline">
            Sign in
          </a>
        </Link>
      </div>
    );
  }
  return (
    <ul className="flex flex-col">
      <span className="text-gray-600 text-2xl font-semibold">Comments:</span>
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
  );
};

export default CommentList;
