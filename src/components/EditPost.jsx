import React, {useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import EditPostCard from "./EditPostCard";

export default function EditPost(props) {

  const [post, setPost] = useState()
  const { id } = useParams();
  
    useEffect(() => {
        const getPost = () => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${id}`, {
          method: "PUT",
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

    const handleSubmit = (e) => {
    e.preventDefault();
    
    let myHeaders = new Headers();
    let myToken = localStorage.getItem("token");
    myHeaders.append(`Authorization`, `Bearer ${myToken}`);
    myHeaders.append(`Content-Type`, `application/json`);

 // grab the data from form
   let title = e.target.title.value;
   let content = e.target.content.value;
  //  let id = e.target.id
  //  button id = post id

   let data = JSON.stringify({ title, content });
   localStorage.setItem("username", data.username)
   console.log(data)
  
    return (
      <>
        {post
          ? 
        <>
          <EditPostCard post={post} />
        </>
        : "loading"}
      </>
    );
        }}
