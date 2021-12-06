import React from "react";
import "./post.css";

const Post = ({ post }) => {
  const { postMessage, selectedGIf } = post;
  return (
    <div className="postDiv my-3 w-50 p-3">
      <h3 className="text-white text-capitalize mb-3">{postMessage}</h3>
      <img className="postImg rounded-3" src={selectedGIf} alt="" />
    </div>
  );
};

export default Post;
