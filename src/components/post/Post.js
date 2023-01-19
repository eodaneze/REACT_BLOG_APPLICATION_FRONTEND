import React from 'react'
import blogImg from '../../assets/blog-4.jpg'
import './post.css'
const Post = () => {
  return (
    <div className='post'>
         <img className='postImg' src={blogImg} alt="blog-img" />

         <div className="postInfo">
             <div className="postCats">
                 <span className="postCat">Music</span>
                 <span className="postCat">Life</span>
             </div>
             <span className="postTitle">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, culpa?
             </span>
             <hr />

             <span className="postDate">
                 1 hour ago
             </span>
         </div>
         <p className="postDesc">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, similique! Praesentium voluptas deserunt pariatur natus perspiciatis, illum veritatis magnam! In nam officiis sunt, amet nesciunt omnis nisi nobis autem modi.
         </p>
    </div>
  )
}

export default Post