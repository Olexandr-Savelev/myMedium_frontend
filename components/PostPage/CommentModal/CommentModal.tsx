import { Dispatch, FC, SetStateAction } from "react";
import { IPostItem } from "../../../pageInterfaces/IndexPageProps";

interface IModal {
  post: IPostItem;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

{
  /* <h3 className="text-center text-xl font-bold uppercase">
          {postItem.title}
        </h3>
        <p>{postItem.body}</p> */
}

const CommentModal: FC<IModal> = ({ post, setIsModalOpen }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-slate-800 font-semibold m-0">
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
              ></textarea>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-slate-500 text-white active:bg-slate-500 hover:bg-slate-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Send comment
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CommentModal;
