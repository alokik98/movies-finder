import React from 'react';
import Nav from './Nav';
import homepageImage from "../images/homepage-background.jpg";
import "./Banner.css";

const Login = () => {
    return (
        <>
            <Nav />
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url(${homepageImage})`,
                backgroundPosition: "center center",
            }}>
                <div className="banner__contents">
                    <h1 className="banner__title">Login</h1>
                    <form>
                        <label>
                            UserName:
                        </label>
                        <input type="text" />
                        <label>
                            Password:
                        </label>
                        <input type="password" />
                    </form>
                </div>
            </header >
        </>
    )
}

export default Login;