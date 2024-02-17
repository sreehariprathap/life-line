// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtESuxexGJ3YoFBbvfV4PcP7c-gSFS5hM",
    authDomain: "life-line-529b1.firebaseapp.com",
    projectId: "life-line-529b1",
    storageBucket: "life-line-529b1.appspot.com",
    messagingSenderId: "806008822358",
    appId: "1:806008822358:web:ac502418fc9aa6d133b9f7"
  };
   
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);
  export default app;