import React from "react";
import { Container } from "react-bootstrap";
import "./home.css";
import PostDiv from "./PostDiv/PostDiv";

const Home = () => {
  return (
    <Container className="mt-5">
      <PostDiv />
    </Container>
  );
};

export default Home;
