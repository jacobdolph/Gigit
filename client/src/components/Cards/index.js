import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

function Cards(props) {
  function onButtonClick(e) {
    console.log("button is clicked!");
    console.log(e);
    // send it to the local storage
    localStorage.setItem("gig", e);
  }

  return (
    <Card style={{ width: "18rem", margin: "25px" }} className='gigCards'>
      <Card.Img variant='top' src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <br />
        <Link
          to='/gig-setup'
          onClick={() => {
            onButtonClick(props.title);
          }}
        >
          <Button className='gigCardBtn'>Book Appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
