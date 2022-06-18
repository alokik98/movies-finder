import React from 'react';
import "./Banner.css";
import { Link } from 'react-router-dom';
import homepageImage from "../../images/homepage-background.jpg";


const Banner = () => {

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${homepageImage})`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Unlimited movies, TV shows and more.</h1>
                <p className="banner__description">Get Information anywhere.</p>
                <div className="banner__buttons">
                    <Link to="/signup">
                        <button className="banner__button">Get Started</button>
                    </Link>
                </div>
            </div>
        </header >
    )
}

export default Banner;