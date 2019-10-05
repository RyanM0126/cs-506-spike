import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkbUNXFpH5pepVNCT4DGx_8J3UUATg_8o",
  authDomain: "cs506-spike-d7254.firebaseapp.com",
  databaseURL: "https://cs506-spike-d7254.firebaseio.com",
  projectId: "cs506-spike-d7254",
  storageBucket: "",
  messagingSenderId: "1023399346508",
  appId: "1:1023399346508:web:c656b9444178ba289e4fe9",
  measurementId: "G-BXTQLR3Y5E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
