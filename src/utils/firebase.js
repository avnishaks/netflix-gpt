// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK57327ryGx_l2hpBursvxHok9Hpxuics",
  authDomain: "gptapp-ecb0a.firebaseapp.com",
  projectId: "gptapp-ecb0a",
  storageBucket: "gptapp-ecb0a.appspot.com",
  messagingSenderId: "416776165185",
  appId: "1:416776165185:web:6bbd7e49b27d7c8fa3b3c0",
  measurementId: "G-LSBLP4XTG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();