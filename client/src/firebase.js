import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg60zoa6nIjCNirS5qcJBf40lqb6WpJbk",
  authDomain: "movies-finder-9b6fd.firebaseapp.com",
  projectId: "movies-finder-9b6fd",
  storageBucket: "movies-finder-9b6fd.appspot.com",
  messagingSenderId: "553390338562",
  appId: "1:553390338562:web:2d8529487c1be95e5cad1b",
  measurementId: "G-V6BLXXWJ0E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
