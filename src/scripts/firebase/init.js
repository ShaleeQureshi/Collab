import firebase from "firebase";
import "firebase/database";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBZUYz5UHC-trwgCs9m-A3CdUK2DJCNUVY",
  authDomain: "collab-6d288.firebaseapp.com",
  projectId: "collab-6d288",
  storageBucket: "collab-6d288.appspot.com",
  messagingSenderId: "1006966492989",
  appId: "1:1006966492989:web:d62343fc55468ba4837f54",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
