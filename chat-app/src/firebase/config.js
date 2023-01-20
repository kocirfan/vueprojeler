//firaebase 8

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4UMKggNDldR5ckX_DpMExMQlXnEvpv_A",
  authDomain: "blog-vue3-e9e32.firebaseapp.com",
  projectId: "blog-vue3-e9e32",
  storageBucket: "blog-vue3-e9e32.appspot.com",
  messagingSenderId: "123075873120",
  appId: "1:123075873120:web:234399ad4f4ee882223605"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore,projectAuth, timestamp}