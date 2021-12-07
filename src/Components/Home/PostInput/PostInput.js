import React from "react";
import { Button } from "react-bootstrap";
import GifBox from "./GifBox/GifBox";
import InputField from "./InputField/InputField";
import "./postInput.css";

const PostInput = ({
  selectedGIf,
  setSelectedGIf,
  postMessage,
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
      <Button
        className="customBtn"
        onClick={handleShowGifBox}
        variant="success"
      >
        GIF
      </Button>
      {showGifBox && !selectedGIf && (
        <GifBox handleGifSelect={handleGifSelect} />
      )}
      {console.log(selectedGIf, postMessage)}
      <div className="d-flex justify-content-end">
        <Button
          onClick={handlePost}
          disabled={!selectedGIf || !postMessage ? true : false}
          variant="primary"
          className="mt-3 w-100"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default PostInput;
