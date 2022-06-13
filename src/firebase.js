import firebase from "./firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCnLC9KMfKEme0eAYTye-9rPTLjT3xEIZg",
  authDomain: "zeodor-9f406.firebaseapp.com",
  databaseURL: "https://zeodor-9f406.firebaseio.com",
  projectId: "zeodor-9f406",
  storageBucket: "zeodor-9f406.appspot.com",
  messagingSenderId: "270197971145",
  appId: "1:270197971145:web:1a16009d4d1b5c0bc05518"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
