import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function Info(props) {
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          name="given-name"
          onChange={(e) => {
            props.setName(e.target.value);
          }}
          placeholder="First and last Name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Phone Number: </Form.Label>
        <Form.Control
          type="tel"
          onChange={(e) => {
            props.setPhoneNum(e.target.value);
          }}
          placeholder="Phone Number"
        />
      </Form.Group>
    </div>
  );
}

export default Info;
