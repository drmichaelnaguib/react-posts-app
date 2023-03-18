import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={styles["main-header"]}>
      <h1 className={styles.title}>Posts App</h1>
      <button type="button" className={styles.button}>
        Add Post
      </button>
    </header>
  );
}

export default MainHeader;
