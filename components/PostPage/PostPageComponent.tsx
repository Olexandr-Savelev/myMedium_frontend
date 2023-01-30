import { FC, useEffect, useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";

import CommentModalContent from "./CommentModalContent/CommentModalContent";
import CommentList from "./CommentList/CommentList";
import CurrentPost from "./CurrentPost/CurrentPost";
import AnimatedModal from "../AnimatedModal/AnimatedModal";

import { IComment, IPostPageProps } from "../../pageInterfaces/PostPageProps";

const PostPageComponent: FC<IPostPageProps> = ({ postItem, user }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [comments, setCommets] = useState<IComment[]>([]);
  const firebaseUser = useAuth();

  const addNewComment = (comment: IComment) => {
    setCommets((comments) => [...comments, comment]);
  };

  const { data, loading, error } = useFetch<IComment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`
  );

  useEffect(() => {
    if (!data) return;
    setCommets(data);
  }, [loading]);

  return (
    <div className="px-2 overflow-hidden">
      <CurrentPost
        postItem={postItem}
        user={user}
        firebaseUser={firebaseUser}
        setIsModalOpen={setIsModalOpen}
      />
      <AnimatedModal isOpen={isModalOpen}>
        <CommentModalContent
          post={postItem}
          setIsModalOpen={setIsModalOpen}
          addNewComment={addNewComment}
        />
      </AnimatedModal>
      <CommentList
        comments={comments}
        loading={loading}
        firebaseUser={firebaseUser}
      />
    </div>
  );
};

export default PostPageComponent;
