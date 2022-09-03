import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    
    const toggleStyle = {
        color: "black"
    }
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
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
              <Link className="nav-link" to="/view-posts">
                Home
              </Link>
              <Link className="nav-link" to="/view-posts">
                Posts
              </Link>
              {props.loggedIn ? (
                <>
                  <link className="nav-link" to="/create-post">
                    Create Post
                  </link>
                  <Link className="nav-link" to="/" onClick={props.logout}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                  <Link className="nav-link" to="/login">
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