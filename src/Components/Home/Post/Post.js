import React from "react";
import "./post.css";

const Post = ({ post }) => {
  const { postMessage, selectedGIf } = post;
  return (
    <div className="postDiv mt-3 w-50 p-3 d-flex justify-content-between">
      <img className="postImg rounded-3" src={selectedGIf} alt="" />
      <div className="w-100 postedMessage ms-3">
        <h4 className="m-2 ps-1 text-left text-white text-capitalize">
          {postMessage}
        </h4>
      </div>
    </div>
  );
};

export default Post;
