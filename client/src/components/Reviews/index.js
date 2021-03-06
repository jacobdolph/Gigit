import React from "react";
import "./style.css";

function Reviews(props) {
  return (
    <div className='divs'>
      <h2>
        {props.name} <i className='fas fa-star' id={"star"}></i>
        <i className='fas fa-star' id={"star"}></i>
        <i className='fas fa-star' id={"star"}></i>
        <i className='fas fa-star' id={"star"}></i>
        <i className='fas fa-star' id={"star"}></i>
      </h2>
      <p>{props.review}</p>
      <p>{props.date}</p>
      <h5>Type of gig: {props.typeOfGig}</h5>
    </div>
  );
}

export default Reviews;
