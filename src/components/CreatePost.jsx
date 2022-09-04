import React from 'react'
import { useNavigate } from "react-router-dom";

export default function CreatePost(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // put navigate into arrow function so it is not immediately called.
    let navigate= (e) => {e.useNavigate();
    let title = e.target.title.value;
    let body = e.target.body.value
    
    let myHeaders = new Headers();
    let myToken = localStorage.getItem('token')

    myHeaders.append(`Authorization`, `Bearer ${myToken}`)
    myHeaders.append(`Authorization`, `Bearer ${myToken}`);
    let data = JSON.stringify({title, body})
    // post request here (gets 2 args(url,data))
    fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
      method: "POST",
      headers: myHeaders,
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.error) {
          console.error(data.error);
        } else {
            console.log(data)
          props.flashMessage("You have successfully created a post", "success");
          navigate("/");
        }
      });
    }
  
    return (
    // attach onSubmit to form
    <form onSubmit={handleSubmit}>
        <h3 className='text-center'>Create Post</h3>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                    <input type='text' className='form-control' placeholder='Enter Title Here' name='title' />
                <label htmlFor="body">Body</label>
                    <input type='text' className='form-control' placeholder='Enter Body Here' name='body' />
                <input type='submit' className='btn btn-primary w-100 mt-3' value='Create Post' />
            </div>
          
    </form>
  )
    }
  }