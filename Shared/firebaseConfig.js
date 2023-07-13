// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXBtLUj1o1P8AoQEVnMDIBv5_pSjXo6z8",
  authDomain: "dribble-bcde1.firebaseapp.com",
  projectId: "dribble-bcde1",
  storageBucket: "dribble-bcde1.appspot.com",
  messagingSenderId: "546843411854",
  appId: "1:546843411854:web:1aa8d72401ef0f0c0a50df",
  measurementId: "G-2LXD3VNY85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);