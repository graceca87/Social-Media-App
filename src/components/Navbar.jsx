import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    
    
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/"> Fakebook </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* Need to figure out how to only show components if user is logged in : */}

                <>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/create-post">Create Post</Link>
                <Link className="nav-link" to="/" onClick={props.logout}>Logout</Link>
                <Link className="nav-link" to="/register"> Register</Link>
                <Link className="nav-link" to="/login">Login</Link>
                </>

            </div>
          </div>
        </div>
      </nav>
    );
}