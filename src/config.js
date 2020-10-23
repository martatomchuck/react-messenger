import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAWKaT-rphcjSIcmZyaBKOEmdjEIjnmrDI",
    authDomain: "messenger-7ab47.firebaseapp.com",
    databaseURL: "https://messenger-7ab47.firebaseio.com",
    projectId: "messenger-7ab47",
    storageBucket: "messenger-7ab47.appspot.com",
    messagingSenderId: "53697091241",
    appId: "1:53697091241:web:dd262dc25e3cdcb83f7bb8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;
