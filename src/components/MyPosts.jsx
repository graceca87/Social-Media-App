import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';


export default function MyPosts() {

    const [posts, setPosts] = useState(null); 

    useEffect(() => {
        const getMyPosts = () => {
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
    getMyPosts()
    }, [])
    return (
      <>

        {/* // use map function to loop through all posts to display them all */}
        {posts ? posts.map((post) => (
              <PostCard
              listView={true}
              allPostsLink={false}
              key={post.id} post={post}/>
            ))
          : "loading"}
      </>
    );
}