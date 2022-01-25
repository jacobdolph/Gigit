import React, { Component } from "react";
import "./style.css";

class Signup extends Component {

    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () =>
            container.classList.add('right-panel-active'));

        signInButton.addEventListener('click', () =>
            container.classList.remove('right-panel-active'));
    }

    render() {
        return (
            <div className="container" id="container" >
                <div className="form-container sign-up-container">
                    <form className="signup">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" id="signUpUsername" placeholder="Username" />
                        <input type="email" id="signUpEmail" placeholder="Email" />
                        <input type="password" id="signUpPassword" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className="login">
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type="text" id="username-input" placeholder="Username" />
                        <input type="password" id="password-input" placeholder="Password" />
                        <button>Log In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Already drunk?</h1>
                            <p>If you already have an account, just click the log in button!</p>
                            <button className="ghost" id="signIn">Log In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Still sober?</h1>
                            <p>Sign up and discover the great amount of cocktails and drinks you can make at home with 15
                                ingreients or less!</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;