import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCM543XoddppdUSQcQAsBYBVjB3I2pD3l4",
    authDomain: "chat-app-2d225.firebaseapp.com",
    projectId: "chat-app-2d225",
    storageBucket: "chat-app-2d225.appspot.com",
    messagingSenderId: "953220576905",
    appId: "1:953220576905:web:3f1c7dad411f24fc0af858",
    measurementId: "G-5EQ2VSZJBW"
});

const db = firebaseConfig.firestore()
const auth = firebase.auth()

export { db, auth }