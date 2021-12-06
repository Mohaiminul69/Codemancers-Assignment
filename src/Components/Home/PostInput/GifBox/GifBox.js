import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Gif from "./Gifs/Gif";
import "./gifBox.css";

const GifBox = ({ handleGifSelect }) => {
  const [gifKeyWord, setGifKeyWord] = useState([]);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const api = "LBQU9l11n5xVlEafWgYsbImybHSA1JOP";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&limit=5&q=${gifKeyWord}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGifs(data.data));
  }, [gifKeyWord]);

  const handleSearch = (e) => {
    setGifKeyWord(e.target.value);
  };

  return (
    <div className="mt-3">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for gifs"
          //   Change to on Change
          onBlur={handleSearch}
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      {gifs.length !== 0 && (
        <div className="gifDiv">
          {gifs.map((gif) => (
            <Gif
              key={gif.images.downsized.url}
              gif={gif.images.downsized.url}
              handleGifSelect={handleGifSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GifBox;
