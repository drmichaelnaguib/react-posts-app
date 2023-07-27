<<<<<<< HEAD
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
=======
import Post from "./Post";

const PostsList = () => {
  return (
    <div>
      <Post title="Post 1" description="des 1" />
      <Post title="Post 2" description="des 2" />
      <Post title="Post 3" description="des 3" />
      <Post title="Post 4" description="des 4" />
    </div>
  );
};

export default PostsList;
>>>>>>> e28124b6c24adea9945dba9444970492300f8c86
