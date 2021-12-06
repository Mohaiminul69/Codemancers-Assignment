import React from "react";
import "./post.css";

const Post = ({ post }) => {
  const { postMessage, selectedGIf } = post;
  return (
    <div className="postDiv my-3 w-50 p-3 d-flex justify-content-between">
      <img className="postImg rounded-3" src={selectedGIf} alt="" />
      <div className="w-100">
        <h3 className="ms-3 text-left text-white text-capitalize mb-3">
          {postMessage}
        </h3>
      </div>
    </div>
  );
};

export default Post;
