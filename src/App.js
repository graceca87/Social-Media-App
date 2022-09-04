
import Navbar from "./components/Navbar";
import Register from './components/Register';
import AlertMessage from './components/AlertMessage';
import { useState } from 'react';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import { Routes, Route } from 'react-router-dom';
import ViewPosts from "./components/ViewPosts";
import ViewPost from "./components/ViewPost";
import "./app.css"

function App(props) {


    const now = new Date();
    // useState is the default value of your variable 
    const [message, setMessage] = useState(null); 
    const [category, setCategory] = useState(null);
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date (localStorage.getItem('expiration')) > now))

    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category)
    }

    const login = () => {
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)
        localStorage.removeItem('token');
        localStorage.removeItem('expiration')
        setLoggedIn(false)
    }

  return (
    <>
      <Navbar name="Social" logout={this.logout} />
      <div className="App-header">
        {/* "if there is a message insert the AlertMessage component. If not, don't show it" */}
        {message ? (<AlertMessage message={message} category={category} flashMessage={flashMessage}/>
        ) : null}
        <Routes>
          {/* "/" is home page that will show all posts. Don't need to be logged in */}
          <Route path="/" element={<ViewPosts loggedIn={props.state.loggedIn} />} />
          {/* if not logged in show: */}
          <Route path="/register" element={<Register flashMessage={flashMessage} />}/>
          <Route path="/login" element={<Login flashMessage={flashMessage} login={login} />}/>
          <Route path="/view-post/:id" element={<ViewPost />} />
          {/* if user IS logged in show: */}
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </>
  );
  }

export default App;
