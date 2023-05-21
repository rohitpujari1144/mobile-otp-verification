import { initializeApp } from "firebase/app";
import {  getAnalytics,  } from "firebase/analytics";
import {  getAuth, RecaptchaVerifier  } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA2-4ImTQQEJDECXqQqkyt13UpKiFyHWB0",
  authDomain: "mobile-otp-verification-80bf5.firebaseapp.com",
  projectId: "mobile-otp-verification-80bf5",
  storageBucket: "mobile-otp-verification-80bf5.appspot.com",
  messagingSenderId: "282299826959",
  appId: "1:282299826959:web:d8ad5964b500aad7cef47a",
  measurementId: "G-KL47RKXYNR"
  };

  const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)