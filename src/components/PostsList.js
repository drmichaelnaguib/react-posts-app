import Post2 from "./Post2"
import styles from "./PostsList.module.css"
import Wrapper from "./ui/Wrapper"
import Card from "./ui/Card"

function PostsList(props) {
    return (
        <Wrapper>
            <Card>
                <div className={styles["posts-list"]}>
                    {/* <Post2 title="first Post" content="This is the first post" />
                    <Post2 title="second Post" content="This is the second post" />
                    <Post2 title="third Post" content="This is the third post" />
                    <Post2 title="fourth Post" content="This is the fourth post" />
                    <Post2 title="fifth Post" content="This is the fifth post" />
                    <Post2 title="sixth Post" content="This is the sixth post" /> */}

                    {props.posts.map((post) => <Post2 title={post.title} content={post.content} />)}
                </div>
            </Card>
        </Wrapper>
    )
}
export default PostsList