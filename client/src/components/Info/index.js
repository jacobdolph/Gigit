import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function Info(props) {
  const { handleChange } = props;
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
    </div>
  );
}

export default Info;
