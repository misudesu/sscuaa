
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, updateDoc, setDoc } from "firebase/firestore";
import  database  from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBapN-UOG1HQhMX5b08geT4_JkTJ2poGRQ",
  authDomain: "sscuaa.firebaseapp.com",
  databaseURL: "https://sscuaa-default-rtdb.firebaseio.com",
  projectId: "sscuaa",
  storageBucket: "sscuaa.appspot.com",
  messagingSenderId: "530312440281",
  appId: "1:530312440281:web:cd4028b8720acf81b4d1c8",
  measurementId: "G-JP4XLSFZQK"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
//export const userName = prompt("What's your name?");
// const urlparams = new URLSearchParams(window.location.search);
// const roomId = urlparams.get("id");
// var firepadRef = collection(db,"cities");
// if (roomId) {
//   firepadRef = collection(db,"cities");
// } else {
//   firepadRef =  addDoc(firepadRef, {
//   name: userName,
//   country: "Japan"
// });
//   window.history.replaceState(null, "Meet", "?id=" + userName);
//   console.log(firepadRef.id)
// }



