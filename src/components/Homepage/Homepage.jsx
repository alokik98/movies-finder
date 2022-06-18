import React from 'react';
import Banner from './Banner';
import "./Homepage.css";
import Nav from "./../Nav/Nav"

const Homepage = () => {
    return (
        <div className='homepage'>
            <Nav />
            <Banner />
        </div>
    )
}

export default Homepage;