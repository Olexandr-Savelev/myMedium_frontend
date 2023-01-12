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
        <span style={{ textAlign: "center" }}>Comments:</span>
        {comments.map(
          (comment: IComment): JSX.Element => (
            <li
              className={styles.comment_wrapper}
              key={comment.id}
            >
              <header className={styles.comment_header}>
                <div>
                  <h4 className={styles.comment_heading}>
                    Name: {comment.name}
                  </h4>
                  <p className={styles.comment_email}>Email: {comment.email}</p>
                </div>
              </header>
              <p className={styles.comment_text}>{comment.body}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PostPageComponent;
