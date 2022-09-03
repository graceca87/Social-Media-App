import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function PostCard({post, listView=false}) {

  return (
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <div className="card mt-4">
          <div className="card-header">{post.author.username}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h5 className="card-title">{post.content}</h5>
            {listView && <Link to={`/view-post/${post.id}`} id="post-link">view post</Link>}
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
