
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvuATf6Q0IhG8AfOAIArvEtqC_N07rrMA",
  authDomain: "email-password-validatio-7c5aa.firebaseapp.com",
  projectId: "email-password-validatio-7c5aa",
  storageBucket: "email-password-validatio-7c5aa.appspot.com",
  messagingSenderId: "322228398202",
  appId: "1:322228398202:web:6d2785cbe7ac5b263c33c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 