import { initializeApp } from "firebase/app";
import {  getAnalytics,  } from "firebase/analytics";
import {  getAuth, RecaptchaVerifier  } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBDapfDeOnk17hrQLON5su7m57E7sFsiaM",
  authDomain: "mobile-otp-verification-f51bc.firebaseapp.com",
  projectId: "mobile-otp-verification-f51bc",
  storageBucket: "mobile-otp-verification-f51bc.appspot.com",
  messagingSenderId: "914427935367",
  appId: "1:914427935367:web:365be9a5dfab4613b1d622",
  measurementId: "G-TM9J7DHDEE"
  };

  const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)
