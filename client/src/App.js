import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import DetailScreen from "./screens/DetailScreen";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <GlobalProvider>
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path="/profile" element={<ProfileScreen />} />
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/details/:id" element={<DetailScreen />} />
            </Routes>
          )}
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
