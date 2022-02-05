import React, { Component, useState } from "react";
import "./style.css";

function Signup() {
  const [loginState, setLoginState] = useState(false);

  const handleChangeLoginState = () => {
    setLoginState(!loginState);
  };

  return (
    <div
      className={`signup-login-container ${
        loginState ? "right-panel-active" : ""
      }`}
      id='container'
    >
      <div className='form-container sign-up-container'>
        <form className='signup'>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type='text' id='signUpUsername' placeholder='Username' />
          <input type='email' id='signUpEmail' placeholder='Email' />
          <input type='password' id='signUpPassword' placeholder='Password' />
          <button>Sign Up</button>
        </form>
      </div>
      <div className='form-container sign-in-container'>
        <form className='login'>
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input type='text' id='username-input' placeholder='Username' />
          <input type='password' id='password-input' placeholder='Password' />
          <button>Log In</button>
        </form>
      </div>
      <div className='overlay-container'>
        <div className='signup-login-overlay'>
          <div className='overlay-panel overlay-left'>
            <h1>Already Have an Account?</h1>
            <p>If you already have an account, just click the log in button!</p>
            <button
              className='ghost'
              id='signIn'
              onClick={() => handleChangeLoginState()}
            >
              Log In
            </button>
          </div>
          <div className='overlay-panel overlay-right'>
            <h1>Need an Account?</h1>
            <p>Sign up and discover Gigs to make your day!</p>
            <button
              className='ghost'
              id='signUp'
              onClick={() => handleChangeLoginState()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
