import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";
import Logo from "../../gigitAssets/images/logo-green-min.png";
import HowTo from "../HowTo";
import Reviews from "../Reviews";
import SpecialReview from "../SpecialReview";
import GigButton from "../GigButton";

function Home() {
  return (
    <div>
      <div className="main-landing">
        <div className="overlay">
          <div className="overlay-elements">
            <img className="logo" src={Logo} alt="logo" />
            <h1>Welcome to Gigit!</h1>
            <p>Why Gigit?</p>
            <p>
              Gigit is a third party application that lets average people get
              top notch talent for their event. A user can Sign up, select a
              gig, choose the right Gigger for their event and then gig them!
              This app also lets people create their own gigs If they feel they
              have what it takes!
            </p>
          </div>
        </div>
      </div>
      <Container>
        <br />
        <br />
        <HowTo />
        <br />
        <br />
        <Row>
          <Col size="md-1 sm-12"></Col>
          <Col size="md-10 sm-12">
            <GigButton />
          </Col>
          <Col size="md-1 sm-12"></Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>
          Dont just take our word for it, look at what people are saying.{" "}
        </h3>
        <br />
        <Reviews
          name="Dawson H."
          review="I booked a DJ gig with this guy and I couldnt be hppier with the playlist that he played! keep up the great work man!"
          date="August 28th, 2020"
          typeOfGig="DJ"
        />
        <br />
        <br />
        <Reviews
          name="Jacob D."
          review="Was the jolliest santa I have ever seen. 10/10 would recommend!"
          date="December 25th, 2019"
          typeOfGig="Santa"
        />
        <br />
        <br />
        <Reviews
          name="Tom R."
          review="Funniest guy out there! loved all the jokes and even told plety of political jokes like I asked!"
          date="March 3rd, 2020"
          typeOfGig="Comedian"
        />
        <br />
        <br />
        <SpecialReview
          name="Rockie B."
          review="Dude showed up late, pretty good magician because he made himself dissapear before the party was over..."
          date="April 1st, 2020"
          typeOfGig="Magician"
        />
        <br />
      </Container>
    </div>
  );
}

export default Home;
