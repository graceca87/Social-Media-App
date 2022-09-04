import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';


export default function ViewPosts() {

    const [posts, setPosts] = useState(null); 

// useEffect happens when you first load the page and it looks at depenencies for changes
    useEffect(() => {
        const getPosts = () => {
        fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              console.error(data.error);
            } else {
            setPosts(data)
            }
          });
      }
    getPosts()
    }, [])
    // dependency array is a list of variables to watch to see if any of them change
    console.log(posts)
    return (
      <>

        {/* // use map function to loop through all posts to display them all */}
        {posts ? posts.map((post) => (
              <PostCard
              listView={true}
              key={post.id} post={post}/>
            ))
          : "loading"}
      </>
    );
}
// *props are created when we render variables
