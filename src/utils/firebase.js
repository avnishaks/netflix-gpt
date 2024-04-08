// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDePuzPnCFlaRpDulKqpnTNkHVTzEYCFYc",
  authDomain: "clonegpt-fc7cc.firebaseapp.com",
  projectId: "clonegpt-fc7cc",
  storageBucket: "clonegpt-fc7cc.appspot.com",
  messagingSenderId: "435660100544",
  appId: "1:435660100544:web:9147d336a4376576e42e25",
  measurementId: "G-9MLWE7XTC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();