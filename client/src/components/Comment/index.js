import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function Comment({ handleChange }) {
  return (
    <Form.Group controlId='exampleForm.ControlTextarea1'>
      <Form.Control
        as='textarea'
        rows='5'
        onChange={handleChange}
        name='userNotes'
      />
    </Form.Group>
  );
}

export default Comment;
