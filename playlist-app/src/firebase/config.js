import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyC4YNFvfHzrcxg_K4n-TlvBLMyOYnjOvhw",
    authDomain: "playlist-app-adb6d.firebaseapp.com",
    projectId: "playlist-app-adb6d",
    storageBucket: "playlist-app-adb6d.appspot.com",
    messagingSenderId: "143531091296",
    appId: "1:143531091296:web:b3eb9ebdfd962017406a05"
  };

  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const projectStorage = firebase.storage();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectAuth, projectStorage,timestamp};