import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PostInput from "./PostInput/PostInput";
import "./home.css";
import Post from "./Post/Post";

const Home = () => {
  const [postMessage, setPostMessage] = useState("");
  const [selectedGIf, setSelectedGIf] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    console.log("post");
  };

  return (
    <Container className="mt-5">
      <PostInput
        selectedGIf={selectedGIf}
        setSelectedGIf={setSelectedGIf}
        postMessage={postMessage}
        setPostMessage={setPostMessage}
        handlePost={handlePost}
      />
      {posts.map((post) => (
        <Post postMessage={postMessage} selectedGIf={selectedGIf} />
      ))}
    </Container>
  );
};

export default Home;
