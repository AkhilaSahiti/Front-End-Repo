import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({post}) => {
    const value = post.body? post.body.substring(0, 100) : 'Not received';
    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{value}</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    )
}

export default PostsExcerpt;