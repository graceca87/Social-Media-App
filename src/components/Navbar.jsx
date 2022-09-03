import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    const navStyle = {
      background: "#fa6e28",
    };
    
    return (
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Fakebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link text-white" to="/view-posts">
                Home
              </Link>
              <Link className="nav-link text-white" to="/view-posts">
                Posts
              </Link>
              {props.loggedIn ? (
                <>
                  <link className="nav-link text-white" to="/create-post">
                    Create Post
                  </link>
                  <Link
                    className="nav-link text-white"
                    to="/"
                    onClick={props.logout}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
}