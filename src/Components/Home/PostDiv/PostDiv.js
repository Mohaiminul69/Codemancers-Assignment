import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GifBox from "./GifBox/GifBox";
import "./postDiv.css";
import InputField from "./InputField/InputField";

const PostDiv = ({
  selectedGIf,
  setSelectedGIf,
  postMessage,
  setPostMessage,
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
      <Button onClick={handleShowGifBox} variant="danger">
        GIF
      </Button>
      {showGifBox && !selectedGIf && (
        <GifBox handleGifSelect={handleGifSelect} />
      )}
      {selectedGIf && (
        <div className="selectedGif mt-3">
          <img src={selectedGIf} alt="" />
        </div>
      )}
    </div>
  );
};

export default PostDiv;
