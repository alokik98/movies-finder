import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
