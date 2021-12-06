import React from "react";
import { Form } from "react-bootstrap";
import "./inputFiled.css";

const InputField = ({ handlePostMessage }) => {
  return (
    <div>
      <Form.Group className="mb-3 messageBox">
        {/* <Form.Label>Share your thoughts</Form.Label> */}
        <Form.Control
          id="messageInput"
          placeholder="Whats on your mind?"
          as="textarea"
          onBlur={handlePostMessage}
          rows={3}
        />
      </Form.Group>
    </div>
  );
};

export default InputField;
