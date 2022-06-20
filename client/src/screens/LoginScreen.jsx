import React, { useState } from 'react'
import "./LoginScreen.css"
import logo from "./../images/logo.png"
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src={logo} alt="logo" />
                <button className='loginScreen__button' onClick={() => setSignIn(true)}
                >Sign In</button>

                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV Programs and more.</h1>
                        <h2>Get details of any movie anywhere.</h2>
                        <button
                            onClick={() => setSignIn(true)}
                            className="loginScreen__button1">GET STARTED</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen