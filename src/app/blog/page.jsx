import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Blog;
