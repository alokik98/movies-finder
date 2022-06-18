import React, { useState } from 'react';
import Nav from './../Nav/Nav';
import homepageImage from "../../images/homepage-background.jpg";
import "./SignUp.css";
import { Link } from "react-router-dom";


const Login = () => {

    const [user, setUser] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });

    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...user, id: new Date().getTime().toString() }
        console.log(records)
        setRecords([...records, newRecord])
        console.log(records)
    }

    return (
        <>
            <Nav />
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url(${homepageImage})`,
                backgroundPosition: "center center",
            }}>
                <div className="login__contents">
                    <h1 className="login__title">Sign Up</h1>
                    <form className='login__form' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='fullName'>Full Name :</label>
                            <input type="text" autoComplete='off' value={user.fullName} onChange={handleInput} name='fullName' id='fullName' />
                            <label htmlFor='username'>Username :</label>
                            <input type="text" autoComplete='off' value={user.username} onChange={handleInput} name='username' id='username' />
                            <label htmlFor='email'>Email :</label>
                            <input type="email" autoComplete='off' value={user.email} onChange={handleInput} name='email' id='email' />
                            <label htmlFor='password'>Password :</label>
                            <input type="password" autoComplete='off' value={user.password} onChange={handleInput} name='password' id='password' />
                        </div>
                        <Link to="/signin">
                            <button type="submit">Register</button>
                        </Link>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Login;