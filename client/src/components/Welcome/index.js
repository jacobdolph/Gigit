import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import { Container } from "../Grid";
import Logo from "../../gigitAssets/images/logo-green-min.png";

function Welcome() {
  return (
    <div className='welcome main-landing'>
      <div className='overlay'>
        <div className='overlay-elements'>
          <img className='logo' src={Logo} alt='logo' />
          <h1>Welcome to Gigit!</h1>
          <h4>
            Find local talent, select Gigs, get the entertainment you need for
            your special event!
          </h4>
          <br />
          <p>Click below to start Gigging!</p>
          {!isAuthenticated && (
            <Link className='signInBtn' to={"signin"}>
              <button>Log in / Sign Up</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
