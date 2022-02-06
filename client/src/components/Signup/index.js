import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_USER, LOGIN_USER } from "../../utils/mutations";
import "./style.css";

function Signup() {
  const [loginState, setLoginState] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);
  const [login, { err }] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleChangeLoginState = () => {
    setLoginState(!loginState);
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className={`signup-login-container ${
        loginState ? "right-panel-active" : ""
      }`}
      id='container'
    >
      <div className='form-container sign-up-container'>
        <form className='signup' onSubmit={handleSignUpSubmit}>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input
            type='text'
            id='signUpUsername'
            placeholder='Username'
            name='userName'
            value={formState.userName}
            onChange={handleChange}
          />
          <input
            type='email'
            id='signUpEmail'
            placeholder='Email'
            name='email'
            value={formState.email}
            onChange={handleChange}
          />
          <input
            type='password'
            id='signUpPassword'
            placeholder='Password'
            name='password'
            value={formState.password}
            onChange={handleChange}
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
      <div className='form-container sign-in-container'>
        <form className='login' onSubmit={handleLoginSubmit}>
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input
            type='text'
            id='username-input'
            placeholder='Email'
            name='email'
            value={formState.email}
            onChange={handleChange}
          />
          <input
            type='password'
            id='password-input'
            placeholder='Password'
            name='password'
            value={formState.password}
            onChange={handleChange}
          />
          <button type='submit'>Log In</button>
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
