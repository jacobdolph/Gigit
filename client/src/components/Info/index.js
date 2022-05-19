import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

function Info(props) {
  const { handleChange, setFormStep } = props;
  return (
    <div>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type='text'
          name='userName'
          onChange={handleChange}
          placeholder='First and last Name'
        />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Phone Number: </Form.Label>
        <Form.Control
          type='tel'
          name='phoneNum'
          onChange={handleChange}
          placeholder='Phone Number'
        />
      </Form.Group>
      {/* <Button
        variant='success'
        type='submit'
        style={{
          width: "40%",
          height: "50px",
          margin: "2em 1em",
          backgroundColor: "#3e9d84",
        }}
      >
        Back
      </Button> */}
      <Button
        variant='success'
        type='submit'
        onClick={() => setFormStep("second")}
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

export default Info;
