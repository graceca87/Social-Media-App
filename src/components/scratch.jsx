
// PostCard as of 2:12pm Mon
import { Link } from "react-router-dom";

export default function PostCard({post, listView=false, allPostsLink=true}) {

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
          </div>
        </div>
      </div>
    </div>
  );
}
// 



// This is the first version of EditPost.jsx
import React, { useState, useParams }from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditPostCard from "./EditPostCard";


export default function EditPost(props) {
	let navigate = useNavigate();
	const {state} = useLocation();
	const [post, setPost] = useState();

	console.log(state)

	const { id } = useParams();
	console.log(id)

  const handleSubmit = (e) => {
    e.preventDefault();

    let myToken = localStorage.getItem("token");
    console.log(myToken)

    let myHeaders = new Headers();
      myHeaders.append(`Authorization`, `Bearer ${myToken}`);
      myHeaders.append(`Content-Type`, `application/json`);

    let formData = JSON.stringify({
      title: e.target.title.value, 
      content: e.target.content.value
    })
   
    fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.error) {
          console.error(data.error);
        } else {
        setPost(data)
        console.log(data)
        props.flashMessage("Your post has been updated!", "success");
        navigate("/");
              }
            });
        }

  return (
	<EditPostCard 
	formData
  post = {post} />
  );
  }
