import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import GifBox from "./GifBox/GifBox";
import "./home.css";

const Home = () => {
  const [showGifBox, setShowGifBox] = useState(false);
  const [selectedGIf, setSelectedGIf] = useState("");

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
    <Container className="mt-5">
      <Button onClick={handleShowGifBox} variant="dark">
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
    </Container>
  );
};

export default Home;
