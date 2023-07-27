import styles from "./Post2.module.css"
function Post2(props) {
    return <div className={styles["post-container"]}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.desc}>{props.content}</p>
    </div>
}
export default Post2