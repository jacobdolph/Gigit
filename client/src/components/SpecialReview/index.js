import React from "react";
import "./style.css";

function SpecialReview(props) {
    return (
        <div className="divs">
            <h2>{props.name}    <i class="fas fa-star" id={"star"}></i><i class="fas fa-star" id={"grey-star"}></i><i class="fas fa-star" id={"grey-star"}></i><i class="fas fa-star" id={"grey-star"}></i><i class="fas fa-star" id={"grey-star"}></i></h2>
            <p>{props.review}</p>
            <p>{props.date}</p>
            <h5>Type of gig: {props.typeOfGig}</h5>
        </div>
    );
}

export default SpecialReview;