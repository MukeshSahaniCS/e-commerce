// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcw4O6-HgygHGyQXxD4J-EZbViRnQzL1k",
  authDomain: "e-indiaapp.firebaseapp.com",
  projectId: "e-indiaapp",
  storageBucket: "e-indiaapp.appspot.com",
  messagingSenderId: "650998877088",
  appId: "1:650998877088:web:ee6111b4a5ca3513c172c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export{fireDB, auth}
