/*import firebase from "./firebase";
import StartFirebase from "../component/firebaseConfig"
import  database  from "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBapN-UOG1HQhMX5b08geT4_JkTJ2poGRQ",
 
  databaseURL: "https://sscuaa-default-rtdb.firebaseio.com/",
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



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

export default   firepadRef;
*/
