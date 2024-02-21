import styles from "./postCard.module.css";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="./post.png" alt="" fill className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default PostCard;
