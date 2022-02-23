import React from "react";
import "./style.css";
import hands from "../../gigitAssets/images/gig_hands.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function GigButton() {
    return (
        <div>
            <img alt='hands' src={hands} className="image"></img>
            <br />
            <br />
            <Link to="/gigs"><Button variant="primary" id={"button"}>Lets Gig It!</Button></Link>
        </div>
    );
}

export default GigButton;