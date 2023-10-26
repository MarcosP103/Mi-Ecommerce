import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo5CgC07Z7xaFk7OF50YbMoiY5z1Uy8jM",
  authDomain: "e-music-ecca2.firebaseapp.com",
  projectId: "e-music-ecca2",
  storageBucket: "e-music-ecca2.appspot.com",
  messagingSenderId: "992683543801",
  appId: "1:992683543801:web:28117975546e084a2f6628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
