import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PostInput from "./PostInput/PostInput";
import "./home.css";
import Post from "./Post/Post";

const Home = () => {
  const [showGifBox, setShowGifBox] = useState(false);
  const [postMessage, setPostMessage] = useState("");
  const [selectedGIf, setSelectedGIf] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    setPosts([...posts, { postMessage, selectedGIf }]);
    setPostMessage("");
    setSelectedGIf("");
    setShowGifBox(false);
  };

  return (
    <Container className="my-5">
      <PostInput
        selectedGIf={selectedGIf}
        setSelectedGIf={setSelectedGIf}
        postMessage={postMessage}
        setPostMessage={setPostMessage}
        handlePost={handlePost}
        showGifBox={showGifBox}
        setShowGifBox={setShowGifBox}
      />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Container>
  );
};

export default Home;
