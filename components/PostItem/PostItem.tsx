import { IPostItem } from "../../pageInterfaces/IndexPageProps";
import Link from "next/link";
import styles from "./PostItem.module.scss";
import { FC } from "react";

interface TopPostItemProps extends IPostItem {
  place?: number;
}

const PostItem: FC<TopPostItemProps> = ({ place, ...postItem }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>
        {place && <span className={styles.post_number}>{place}</span>}
        <Link href={`post/${postItem.id}`}>
          <a>{postItem.title}</a>
        </Link>
      </h3>
      <p className={styles.text}>{postItem.body}</p>
    </div>
  );
};

export default PostItem;
