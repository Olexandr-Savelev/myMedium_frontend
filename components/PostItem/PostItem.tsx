import { PostItemProps } from "../../pageInterfaces/IndexPageProps";
import Link from "next/link";
import styles from "./PostItem.module.scss";
import { FC } from "react";

const PostItem: FC<PostItemProps> = ({ ...postItem }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>
        <span></span>
        <Link href={`post/${postItem.id}`}>
          <a>{postItem.title}</a>
        </Link>
      </h3>
      <p className={styles.text}>{postItem.body}</p>
    </div>
  );
};

export default PostItem;
