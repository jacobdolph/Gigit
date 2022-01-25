import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.css";

function ProfileCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="profileCards">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.gigName}</Card.Title>
        <br />
        <Card.Text>
          <p>
            <strong>comment for the gigger:</strong>
          </p>
          {props.comment}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <strong>Contact me at: </strong>
          {props.number}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Date: </strong>
          {props.bookDate}
        </ListGroupItem>
        <ListGroupItem>
          <strong>From: </strong>
          {props.fromTime}
        </ListGroupItem>
        <ListGroupItem>
          <strong>To: </strong>
          {props.toTime}
        </ListGroupItem>
      </ListGroup>
      <Card.Body className="body">
        <button className="cancelBtn" {...props}>Cancel Gig</button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
