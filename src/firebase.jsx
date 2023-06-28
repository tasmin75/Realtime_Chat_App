import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDzv3ACbbp8Dl9Lc9robBD0bT-sx6BAl74",
  authDomain: "fire-chat-319dc.firebaseapp.com",
  projectId: "fire-chat-319dc",
  storageBucket: "fire-chat-319dc.appspot.com",
  messagingSenderId: "505758192190",
  appId: "1:505758192190:web:73b264ce45eeda0454376f",
  measurementId: "G-9F08P33FTJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
