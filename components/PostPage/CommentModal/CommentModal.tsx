import { Dispatch, FC, SetStateAction, useRef, useState } from "react";

import { useAuth } from "../../../hooks/useAuth";

import ErrorStringWithHandler from "../../Error/ErrorStringWithHandler";

import { IPostItem } from "../../../pageInterfaces/IndexPageProps";
import { IComment } from "../../../pageInterfaces/PostPageProps";

interface IModal {
  post: IPostItem;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  addNewComment: (comment: IComment) => void;
}

const CommentModal: FC<IModal> = ({ post, setIsModalOpen, addNewComment }) => {
  const firebaseUser = useAuth();
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [error, setError] = useState<Error | undefined>();

  const onCommentAdd = () => {
    if (ref.current!.value && firebaseUser) {
      addNewComment({
        postId: post.id,
        id: Date.now(),
        name: firebaseUser.uid!,
        email: firebaseUser.email!,
        body: ref.current!.value,
      });
      setIsModalOpen(false);
    }
    setError(new Error());
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-sm sm:max-w-md md:max-w-3xl md:h-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t h-full md:h-auto">
              <h3 className="text-2xl text-slate-800 font-semibold m-0 sm:text-3xl">
                {post.title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-80"
                onClick={() => setIsModalOpen(false)}
              >
                &#10006;
              </button>
            </div>
            <div className="relative px-4 py-2 flex-auto">
              <p className="text-slate-500 text-md leading-relaxed">
                {post.body}
              </p>
            </div>
            <div className="w-full px-4">
              <textarea
                id="message"
                rows={4}
                className="block p-2 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:ring-slate-500 focus:border-slate-500"
                placeholder="Write your comment here..."
                ref={ref}
              ></textarea>
              {error && (
                <ErrorStringWithHandler
                  message="Please type your comment."
                  setError={setError}
                />
              )}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center uppercase"
                type="button"
                onClick={(e) => onCommentAdd()}
              >
                Send comment
              </button>
              <button
                className="text-red-500 hover:text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black cursor-pointer"></div>
    </>
  );
};

export default CommentModal;
