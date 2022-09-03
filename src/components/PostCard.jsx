import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostCard({post, listView=false}) {

  return (
    <div className="card">
      <div className="card-header">{post.date_created}</div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        {listView && <Link to={`/view-post/${post.id}`}>View This Post</Link>}
        <p className="card-text"></p>
      </div>
    </div>
  );
}
