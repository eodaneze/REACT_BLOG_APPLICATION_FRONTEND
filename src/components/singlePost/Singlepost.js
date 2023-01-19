import React from "react";
import "./singlepost.css";
import postImg from "../../assets/blog-1.avif";
const Singlepost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={postImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
           <span className="singlePostAuthor">Author: <b>Daniel</b></span>
           <span className="singlePostDate"><b>1 hour ago</b></span>
        </div>
        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus, libero odit repellat iure, quasi nisi aspernatur itaque sit soluta facere? Error at quidem harum dolorem repellendus odit quas vel, nostrum consequuntur reiciendis perspiciatis ad aperiam accusamus exercitationem ipsam quae sit, quo officiis ipsum autem alias non. Odio quam cumque at, qui ducimus magnam esse neque ut natus accusamus porro earum? Natus nam voluptatibus vel. Dolorum, doloremque necessitatibus voluptatibus molestias veniam cum neque laboriosam repudiandae fugit ducimus earum aliquam fuga porro corrupti sequi officiis dolore quos! Nam, labore nisi numquam totam, mollitia sit magni tempora praesentium illo odio, ipsum earum.</p>
      </div>
    </div>
  );
};

export default Singlepost;
