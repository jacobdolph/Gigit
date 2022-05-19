import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

function Comment({ handleChange, setFormStep }) {
  return (
    <div>
      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Control
          as='textarea'
          rows='5'
          onChange={handleChange}
          name='userNotes'
        />
      </Form.Group>
      <Button
        variant='success'
        type='submit'
        onClick={() => setFormStep("fourth")}
        style={{
          width: "40%",
          height: "50px",
          margin: "2em 1em",
          backgroundColor: "#3e9d84",
        }}
      >
        Back
      </Button>
      <Button
        variant='success'
        type='submit'
        onClick={() => setFormStep("sixth")}
        style={{
          width: "40%",
          height: "50px",
          margin: "2em 1em",
          backgroundColor: "#3e9d84",
        }}
      >
        Continue
      </Button>
    </div>
  );
}

export default Comment;
