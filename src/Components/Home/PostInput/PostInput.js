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
}) => {
  const [showGifBox, setShowGifBox] = useState(false);

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
        <div className="selectedGif mt-3">
          <img src={selectedGIf} alt="" />
        </div>
      )}
      <Button className="mt-3" onClick={handleShowGifBox} variant="light">
        GIF
      </Button>
      {showGifBox && !selectedGIf && (
        <GifBox handleGifSelect={handleGifSelect} />
      )}
      <div className="d-flex justify-content-end">
        <Button onClick={handlePost} variant="primary" className="mt-2">
          Post
        </Button>
      </div>
    </div>
  );
};

export default PostInput;
