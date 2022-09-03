import React, {useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";

export default function Post(props) {
  // const [post_id, setPostId] = useState(1);
  const [post, setPost] = useState()
    const { id } = useParams();
  console.log(id)
// useEffect happens when you first load the page and it looks at depenencies for changes
    useEffect(() => {
        const getPost = () => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${id}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              console.error(data.error);
            } else {
            setPost(data)
            }
          });
      }
    getPost()
    }, [id])
  
    return (
      <>
        {post
          ? 
        <>
          <PostCard post={post} />
        </>
        : "loading"}
      </>
    );
  }
