import { useState,useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
      {  _id: 1,
        image: 'https://images.pexels.com/photos/39557160/pexels-photo-39557160.jpeg',
        caption: 'This is a sample post'
    }
    ])

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])

  return (
    <section className="feed-section">
       {posts.length > 0 ? (
    posts.map((post) => (
        <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
        </div>
    ))
) : (
    <p>No posts available</p>
)}
    </section>
  )
}

export default Feed
