import React from "react";
import "./gif.css";

const Gif = ({ gif, handleGifSelect }) => {
  return (
    <div>
      <img
        onClick={() => handleGifSelect(gif)}
        className="gifImages"
        src={gif}
        alt=""
      />
    </div>
  );
};

export default Gif;
