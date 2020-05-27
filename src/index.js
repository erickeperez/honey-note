import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMwi5_AKHtzphA-cZZvV0oNsrHKnczJTg",
  authDomain: "honeynotes-abb4b.firebaseapp.com",
  databaseURL: "https://honeynotes-abb4b.firebaseio.com",
  projectId: "honeynotes-abb4b",
  storageBucket: "honeynotes-abb4b.appspot.com",
  messagingSenderId: "487790571048",
  appId: "1:487790571048:web:ba1fa94f935a4430220f1d",
  measurementId: "G-RQ4BDG085E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
