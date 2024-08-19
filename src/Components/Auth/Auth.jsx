// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




//file details i have to make it on env file
const firebaseConfig = {
  apiKey: "AIzaSyBK_9-86UwxkCUZRnj56TRjsUK507FArd0",
  authDomain: "security-761eb.firebaseapp.com",
  projectId: "security-761eb",
  storageBucket: "security-761eb.appspot.com",
  messagingSenderId: "528709147790",
  appId: "1:528709147790:web:94b400e5de8f738d9cbddf",
  measurementId: "G-N94EN4S74R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const AppData = getAuth(app)
export const DataStore = getFirestore(app)
