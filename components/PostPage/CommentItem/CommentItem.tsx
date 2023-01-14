import { FC } from "react";
import { IComment } from "../../../pageInterfaces/PostPageProps";

const CommentItem: FC<IComment> = (comment) => {
  return (
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
  );
};

export default CommentItem;
