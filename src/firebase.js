import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCA63ndPtUU64UO9_tFHWu6KBBOzJFaGnk",
  authDomain: "clone-17197.firebaseapp.com",
  projectId: "clone-17197",
  storageBucket: "clone-17197.appspot.com",
  messagingSenderId: "830027899388",
  appId: "1:830027899388:web:4f108ff628da06c35bd279",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
