import Image from "next/image";
import React from "react";
import { IComment, IPostPageProps } from "../../pageInterfaces/PostPageProps";
import styles from "./PostPageComponent.module.scss";

const PostPageComponent = ({
  postItem,
  comments,
}: IPostPageProps): JSX.Element => {
  return (
    <>
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
                <Image
                  placeholder="blur"
                  blurDataURL="../../public/Profile_avatar_placeholder_large.png"
                  className={styles.comment_img}
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                  alt="ava"
                  height={50}
                  width={50}
                />
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
    </>
  );
};

export default PostPageComponent;
