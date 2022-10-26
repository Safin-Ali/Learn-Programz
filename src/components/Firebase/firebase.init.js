// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaJ-hqjmB6WGh7ba7iPJa-mJFkl1e7cLU",
  authDomain: "learn-programz.firebaseapp.com",
  projectId: "learn-programz",
  storageBucket: "learn-programz.appspot.com",
  messagingSenderId: "973933799747",
  appId: "1:973933799747:web:57761bfdaf260c924b27f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;