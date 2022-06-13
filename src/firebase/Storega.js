// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBapN-UOG1HQhMX5b08geT4_JkTJ2poGRQ",
  authDomain: "sscuaa.firebaseapp.com",
  projectId: "sscuaa",
  storageBucket: "sscuaa.appspot.com",
  messagingSenderId: "530312440281",
  appId: "1:530312440281:web:cd4028b8720acf81b4d1c8",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db=getFirestore(app);
