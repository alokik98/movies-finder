import React from 'react'
import Banner from './../components/Banner'
import Favourites from './../components/Favourites';
import Nav from './../components/Nav'
import Row from './../components/Row';

const HomeScreen = () => {

    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row title="Movies" />
            <Favourites title="My List" />
        </div>
    )
}

export default HomeScreen