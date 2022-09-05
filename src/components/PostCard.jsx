import { Link } from "react-router-dom";
import Datetime from "react-datetime"


export default function PostCard({post, listView=false, allPostsLink=true}) {

  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <div className="card mt-4">
          <div className="card-header">{post.author.username}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h5 className="card-title">{post.content}</h5>
            {/* link to view specific post (only show when on homepage) */}
            {listView && <Link to={`/view-post/${post.id}`} id="post-link">view post</Link>}
            {/* link to go back to homepage. Only show when on individual post */}
            {allPostsLink && <Link to={`/`}>back to posts</Link>}
            <p className="card-text">created {post.date_created}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
