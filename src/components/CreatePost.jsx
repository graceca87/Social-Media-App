import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function CreatePost(props) {

  let navigate = useNavigate();

	// useEffect(() => {
	// 	if (!props.loggedIn){
	// 	props.flashMessage('You must be logged in to create a post', 'danger')
	// 	navigate('/login')
	// }
	// 	}, [props.loggedIn, navigate, props])
		

  const handleSubmit = (e) => {
    e.preventDefault();

    let myHeaders = new Headers();
    let myToken = localStorage.getItem("token");
    myHeaders.append(`Authorization`, `Bearer ${myToken}`);
    myHeaders.append(`Content-Type`, `application/json`);

 // grab the data from form
   let title = e.target.title.value;
   let content = e.target.content.value;
   let data = JSON.stringify({ title, content });

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
          console.log(data);
          props.flashMessage("Your post has been published!", "success");
          navigate("/");
        }
      });
  };

 return (
    // attach onSubmit to form
    <div className="row justify-content-center">
        <div className="col-sm-6">
          	<div className="card mt-4 p-4">
				<form onSubmit={handleSubmit}>
					<h3 className="text-center">Create Post</h3>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" className="form-control" placeholder="Enter Title Here" name="title"/>
						<label htmlFor="content">Body</label>
						<input type='text' className='form-control' placeholder='Enter Body Here' name='content' />

						{/* <label htmlFor="body" className="form-label">Body</label>
						<textarea className="form-control" id="post-body" rows="3"></textarea> */}
						<input type="submit" className="btn btn-primary w-100 mt-3" value="Create Post"/>
					</div>
				</form>
        	</div>
      	</div>
    </div>
  );
}
  