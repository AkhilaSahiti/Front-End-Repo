import { useSelector } from "react-redux"
import { getPostsError, getPostsStatus, selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {

    // const posts = useSelector(selectAllPosts);
    const orderedPostsIds = useSelector(selectPostIds);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if(postsStatus === 'loading'){
        content = <p>'Loading...'</p>;
    } else if(postsStatus === 'succeeded'){
        // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        // content = orderedPosts.map((post, id) => <PostsExcerpt key={id} post={post} />)
        content = orderedPostsIds.map(postId => <PostsExcerpt key={postId} post={postId} />)
    } else if(postsStatus === 'failed'){
        content = <p>{error}</p>
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostsList