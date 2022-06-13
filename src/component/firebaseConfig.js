// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase(){

const firebaseConfig = {
  apiKey: "AIzaSyBapN-UOG1HQhMX5b08geT4_JkTJ2poGRQ",
  authDomain: "sscuaa.firebaseapp.com",
  projectId: "sscuaa",
  storageBucket: "sscuaa.appspot.com",
  messagingSenderId: "530312440281",
  appId: "1:530312440281:web:cd4028b8720acf81b4d1c8",
 
};
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
return getDatabase(app);

}
export  default StartFirebase;
