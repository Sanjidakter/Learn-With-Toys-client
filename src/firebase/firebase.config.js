// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ4XK1m0WVzuteYXLqcQ48-WcOdueNT3o",
  authDomain: "learn-with-toy.firebaseapp.com",
  projectId: "learn-with-toy",
  storageBucket: "learn-with-toy.appspot.com",
  messagingSenderId: "775328292289",
  appId: "1:775328292289:web:049918af3eaa77ce2da340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;