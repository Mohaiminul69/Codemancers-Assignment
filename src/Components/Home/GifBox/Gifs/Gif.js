import React from "react";
import "./gif.css";

const Gif = ({ gif }) => {
  console.log(gif);
  return (
    <div>
      <img className="gifImages" src={gif} alt="" />
    </div>
  );
};

export default Gif;
