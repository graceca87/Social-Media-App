import React from 'react'
import  { useNavigate } from 'react-router-dom';
import LoginCard from './LoginCard';

export default function Login(props) {

    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(e)

        let username = e.target.username.value
        let password = e.target.password.value

        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Basic ' + btoa(`${username}:${password}`))

        let response = await fetch(
          `https://kekambas-blog.herokuapp.com/auth/token`,

          { method: "POST",
           headers: myHeaders }
        );
        if (response.ok){

        let data = await response.json();
     
        //  Store the token and expiration in localStorage
        localStorage.setItem('token', data.token)
        localStorage.setItem('expiration', data.token_expiration);

        // change the loggedIn state to true
        props.login();
       

        // Flash success message
        props.flashMessage(`Welcome back, ${username}!`, 'success');
        // once logged in send the user to homepage:
        navigate('/'); 
        }
        else {
            props.flashMessage('Your username and/or password are incorrect', 'danger');
        }

    }
  return (
    <LoginCard 
    handleSubmit = {handleSubmit}/>
    )
}

