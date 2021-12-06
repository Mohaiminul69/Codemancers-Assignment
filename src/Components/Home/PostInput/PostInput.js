import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GifBox from "./GifBox/GifBox";
import "./postInput.css";
import InputField from "./InputField/InputField";

const PostInput = ({
  selectedGIf,
  setSelectedGIf,
  setPostMessage,
  handlePost,
  showGifBox,
  setShowGifBox,
}) => {
  const handlePostMessage = (e) => {
    setPostMessage(e.target.value);
  };

  const handleShowGifBox = () => {
    setSelectedGIf("");
    if (selectedGIf) {
      setShowGifBox(true);
    } else {
      setShowGifBox(!showGifBox);
    }
  };

  const handleGifSelect = (gif) => {
    setSelectedGIf(gif);
  };

  return (
    <div className="mt-5 w-50 bgGrey p-3 rounded-3">
      <InputField handlePostMessage={handlePostMessage} />
      {selectedGIf && (
        <div className="selectedGif my-3">
          <img src={selectedGIf} alt="" />
        </div>
      )}
      <Button onClick={handleShowGifBox} variant="success">
        GIF
      </Button>
      {showGifBox && !selectedGIf && (
        <GifBox handleGifSelect={handleGifSelect} />
      )}
      <div className="d-flex justify-content-end">
        <Button onClick={handlePost} variant="primary" className="mt-3 w-100">
          Post
        </Button>
      </div>
    </div>
  );
};

export default PostInput;
