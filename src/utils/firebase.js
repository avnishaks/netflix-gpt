// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgVfuCd261UW4G2FYJKclXH4hhgDep2g4",
  authDomain: "netflixgpt-330ac.firebaseapp.com",
  projectId: "netflixgpt-330ac",
  storageBucket: "netflixgpt-330ac.appspot.com",
  messagingSenderId: "180326930920",
  appId: "1:180326930920:web:8a8be0934fa195221fec5d",
  measurementId: "G-SQE7FXECKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();