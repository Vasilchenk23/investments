import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import 'firebase/auth'

const firebaseConfig = {
  // Ваши данные конфигурации Firebase
  apiKey: "AIzaSyBOFzwJNbw3MeX_CDibsDdzLoHXfpqqAwY",
  authDomain: "backend-e78a5.firebaseapp.com",
  projectId: "backend-e78a5",
  storageBucket: "backend-e78a5.appspot.com",
  messagingSenderId: "236389813481",
  appId: "1:236389813481:web:f73d39f6a77934aa2d7478",
  measurementId: "G-V7R349WFRD"
};
firebase.initializeApp(firebaseConfig);

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
