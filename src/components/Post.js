import styles from "./Post.module.css";

const Post = ({ title, description }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Post;
