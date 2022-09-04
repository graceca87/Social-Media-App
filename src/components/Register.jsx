
import React from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterCard from './RegisterCard';

export default function Register(props) {
// navigate is a hook that returns a function that lets you navigate programatically
    let navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e)

        // Check that the password matches
    let password = e.target.password.value;
    let confirmPass = e.target.confirmPass.value;
    if (password !== confirmPass){
        props.flashMessage('Your passwords do not match', 'danger')
    } else {
        console.log('Passwords do match!')
        // set up request to Flask App. Headers is a built in method
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let formData = JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: password
        })

    fetch("https://kekambas-blog.herokuapp.com/auth/users", {
      method: "POST",
      headers: myHeaders,
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          props.flashMessage("You have successfully registered", "success");
          navigate("/");
        }
      });
    }

 }

    return (
        <RegisterCard 
        handleSubmit = {handleSubmit}/>
    )
}