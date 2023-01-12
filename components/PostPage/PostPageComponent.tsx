import { FC, useEffect, useState } from "react";
import { IComment, IPostPageProps } from "../../pageInterfaces/PostPageProps";
import styles from "./PostPageComponent.module.scss";

const PostPageComponent: FC<IPostPageProps> = ({ postItem }) => {
  const [comments, setCommets] = useState<IComment[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
      .then((res) => res.json().then((comments) => setCommets(comments)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.postpage_wrapper}>
      <div className={styles.post_wrapper}>
        <h3 className={styles.post_heading}>{postItem.title.toUpperCase()}</h3>
        <p className={styles.text}>{postItem.body}</p>
      </div>
      <ul className={styles.comment_list}>
        <span
          className="text-gray-600 text-2xl font-semibold"
          style={{ textAlign: "center" }}
        >
          Comments:
        </span>
        {comments.map(
          (comment: IComment): JSX.Element => (
            <li key={comment.id}>
              <div className="flex justify-center mb-3">
                <div className="rounded-lg shadow-lg bg-white min-w-[100%]">
                  <div className="p-4">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      Name: {comment.name}
                    </h5>
                    <h5 className="text-gray-800 text-xl font-medium mb-2">
                      Email: {comment.email}
                    </h5>
                    <p className="text-gray-700 text-base mb-2">
                      {comment.body}
                    </p>
                  </div>
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
