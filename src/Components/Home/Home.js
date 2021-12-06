import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PostDiv from "./PostDiv/PostDiv";
import "./home.css";

const Home = () => {
  const [postMessage, setPostMessage] = useState("");
  const [selectedGIf, setSelectedGIf] = useState("");
  return (
    <Container className="mt-5">
      <PostDiv
        selectedGIf={selectedGIf}
        setSelectedGIf={setSelectedGIf}
        postMessage={postMessage}
        setPostMessage={setPostMessage}
      />
    </Container>
  );
};

export default Home;
