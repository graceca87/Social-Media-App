import { Link } from "react-router-dom";




export default function PostCard({props, post, listView=false, allPostsLink=true}) {

  return (
    <div className="row justify-content-center">
        <div className="col-sm-6">
			<div className="card mt-4">
				<div className="card-header">{post.author.username}</div>
				<div className="card-body">
					<h2 className="card-title">{post.title}</h2>
					<h5 className="card-title mt-3">{post.content}</h5>
					<p className="card-text mt-4">created {post.date_created}</p>
					{/* link to view specific post (only show when on homepage) */}
					{listView && <Link className="post-link" to={`/view-post/${post.id}`} id="post-link">view post</Link>}
					{/* link to go back to homepage. Only show when on individual post */}
					{allPostsLink && <Link className="post-link" to={`/`}>back</Link>}
					
					
					{/* { post.author.username === localStorage.username ? (
								<h4>You can edit this post</h4>
								) : (
								<h2>You can Not edit this post</h2>
								)} */}
				</div>
			</div>
		</div>
    </div>
  );
}