import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGNyHBDdaKxVU3YXKN7NGVy-w6FUCjrM0",
    authDomain: "react-bd5de.firebaseapp.com",
    projectId: "react-bd5de",
    storageBucket: "react-bd5de.appspot.com",
    messagingSenderId: "390893288508",
    appId: "1:390893288508:web:2b22d5715dcd1392fed739"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
