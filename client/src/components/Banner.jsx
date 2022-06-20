import React from 'react';
import "./Banner.css";
import homeImage from "./../images/homepage-background.jpg"

const Banner = () => {


    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(${homeImage})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Welcome to Movies Finder
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner