// import firebase from 'firebase';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkf5FDX04OWSdtZJiqgKbXKzbIO-l7RBI",
  authDomain: "clone-13643.firebaseapp.com",
  projectId: "clone-13643",
  storageBucket: "clone-13643.appspot.com",
  messagingSenderId: "659725859127",
  appId: "1:659725859127:web:34a49d68c01a35c250c2b2",
  measurementId: "G-Z4DV4F1CQF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };