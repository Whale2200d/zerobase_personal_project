// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd7f4IE7tpirJX95Q7IsStIxVMA9kbw2U",
  authDomain: "gift-mind-personal-project.firebaseapp.com",
  projectId: "gift-mind-personal-project",
  storageBucket: "gift-mind-personal-project.appspot.com",
  messagingSenderId: "1081652797191",
  appId: "1:1081652797191:web:426418ba618a1e57796fa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 추가
const auth = getAuth(app);
export { app, auth };
