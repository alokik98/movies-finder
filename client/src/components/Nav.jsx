import React from 'react';
import "./Nav.css"
import logo from "./../images/logo.png"
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const [show, handleShow] = useState(false);
    const history = useNavigate();

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => { window.removeEventListener('scroll', transitionNavbar) }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`} >
            <div className="nav__contents">
                <img
                    onClick={() => history("/")}
                    className='nav__logo' src={logo} alt="logo" />
                <img
                    onClick={() => history("/profile")}
                    className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            </div>
        </div >
    )
}

export default Nav