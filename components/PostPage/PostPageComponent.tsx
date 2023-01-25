import { FC, useEffect, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import CommentModal from "./CommentModal/CommentModal";
import CommentList from "./CommentList/CommentList";
import CurrentPost from "./CurrentPost/CurrentPost";

import { IComment, IPostPageProps } from "../../pageInterfaces/PostPageProps";

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
    <div className="px-2 overflow-hidden">
      <CurrentPost
        postItem={postItem}
        user={user}
        firebaseUser={firebaseUser}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && (
        <CommentModal
          post={postItem}
          setIsModalOpen={setIsModalOpen}
          addNewComment={addNewComment}
        />
      )}
      <CommentList
        comments={comments}
        loading={loading}
        firebaseUser={firebaseUser}
      />
    </div>
  );
};

export default PostPageComponent;
