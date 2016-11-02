import React from 'react';
import App from './components/App.jsx';
require('./main.scss');
import firebase from 'firebase'
// Initialize Firebase
let config = {
  apiKey: "AIzaSyBzqAYu5xPu8xmYdboiQW9kPk1p0QHBE4k",
  authDomain: "react-stack-65c96.firebaseapp.com",
  databaseURL: "https://react-stack-65c96.firebaseio.com",
  storageBucket: "react-stack-65c96.appspot.com",
  messagingSenderId: "298137980517"
};
firebase.initializeApp(config);
React.render(<App />, document.getElementById('container'));
