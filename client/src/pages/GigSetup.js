import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calender from "../components/Calender";
import { Container, Col, Row } from "../components/Grid";
import "../components/Calender/style.css";
import Time from "../components/Time";
import Address from "../components/Address";
import Comment from "../components/Comment";
import Info from "../components/Info";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "./pages.css";
import Auth from "../utils/auth";
import { QUERY_ME_BASIC } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GIG } from "../utils/mutations";

function GIGSETUP() {
  const { loading, error, data: userData } = useQuery(QUERY_ME_BASIC);
  const { addGig } = useMutation(ADD_GIG);
  console.log(userData?.me);
  // getting user date
  // setting up state with useState
  // const [name, setName] = useState("");
  // const [phoneNum, setPhoneNum] = useState("");
  // const [date, setDate] = useState("");
  // const [addOne, setAddOne] = useState("");
  // const [addTwo, setAddTwo] = useState("");
  // const [city, setCity] = useState("");
  // const [endTime, setEndTime] = useState("");
  // const [startTime, setStartTime] = useState("");
  // const [usState, setUsState] = useState("");
  // const [zip, setZip] = useState("");
  // const [userNotes, setUserNotes] = useState("");

  const [gigSetup, setGigSetup] = useState({
    gigName: localStorage.getItem("gig").toString() || "",
    gigType: localStorage.getItem("gig").toString() || "",
    userName: userData?.me?.userName || "",
    phoneNum: "",
    dateBooked: new Date.now().toString(),
    date: "",
    email: userData?.me?.email || "",
    city: "",
    endTime: "",
    startTime: "",
    usState: "",
    zip: "",
    addOne: "",
    addTwo: "",
    gigDate: gigSetup.date,
    userNotes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setGigSetup({
      ...gigSetup,
      [name]: value,
    });
    console.log(gigSetup);
  };

  // let email = user.email;
  // grab from local storage
  var gigName = localStorage.getItem("gig");

  // setting up modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // use state for all imputs
  // var state = {
  //   gigName,
  //   name,
  //   phoneNum,
  //   email,
  //   date,
  //   addOne,
  //   addTwo,
  //   city,
  //   endTime,
  //   startTime,
  //   usState,
  //   zip,
  //   userNotes,
  // };
  useEffect(() => {
    setGigSetup({
      ...gigSetup,
      userName: userData?.me?.userName,
      email: userData?.me?.email,
    });
  }, [userData?.me.email, userData?.me.userName]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addGig(gigSetup);
    // console.log("form submitted!");
    // console.log(state);
    // console.log(state.date);

    // API.saveGig(state)
    //   .then((res) => ({
    //     result: res.data,
    //   }))
    //   .catch((err) => console.log(err));
    handleShow();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container fluid>
      <Row>
        <Col size='md-5 sm-12'></Col>
        <Col size='md-2 sm-12'>
          <h3>Please Enter all required info</h3>

          <Info handleChange={handleChange} />
        </Col>
        <Col size='md-5 sm-12'></Col>
      </Row>

      <Row>
        <Col size='md-5 sm-12'></Col>
        <Col size='md-2 sm-12'>
          <h4>Date of Event</h4>

          <Calender handleChange={handleChange} />
        </Col>
        <Col size='md-5 sm-12'></Col>
      </Row>

      <Row>
        <Col size='md-5 sm-12'></Col>
        <Col size='md-2 sm-12'>
          <h4>How long will you need the Gig?</h4>
          <p>From: </p>
          <Time start='start' handleChange={handleChange} />
          <p>To: </p>
          <Time handleChange={handleChange} />
        </Col>
        <Col size='md-5 sm-12'></Col>
      </Row>

      <Row>
        <Col size='md-5 sm-12'></Col>
        <Col size='md-2 sm-12'>
          <h4>Address for Event</h4>
          <Address handleChange={handleChange} />
        </Col>
        <Col size='md-5 sm-12'></Col>
      </Row>

      <Row>
        <Col size='md-5 sm-12'></Col>
        <Col size='md-2 sm-12'>
          <h4>Leave a comment for the Gigger</h4>
          <Comment handleChange={handleChange} />
        </Col>
        <Col size='md-5 sm-12'></Col>
      </Row>
      <Row>
        <Col size='md-2 sm-12'></Col>
        <Col size='md-8 sm-12'>
          <Button
            variant='success'
            type='submit'
            onClick={handleFormSubmit}
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#3e9d84",
            }}
          >
            GIG IT!
          </Button>
        </Col>
        <Col size='md-2 sm-12'></Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Congrats on setting up a gig with <strong>{gigName}</strong>!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The gigger will get in touch with you shortly.</p>
          <p>Thank you for choosing Gigit for scheduling your event!</p>
        </Modal.Body>
        <Modal.Footer>
          <Link
            to='/profile'
            className='btn btn-success'
            style={{
              margin: "auto",
              width: "350px",
              height: "50px",
              backgroundColor: "#3e9d84",
            }}
          >
            Go to Profile
          </Link>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default GIGSETUP;
