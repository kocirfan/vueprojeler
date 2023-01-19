// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4UMKggNDldR5ckX_DpMExMQlXnEvpv_A",
  authDomain: "blog-vue3-e9e32.firebaseapp.com",
  projectId: "blog-vue3-e9e32",
  storageBucket: "blog-vue3-e9e32.appspot.com",
  messagingSenderId: "123075873120",
  appId: "1:123075873120:web:ecf2c29d8a3d8d72223605"
};

const fb = initializeApp(firebaseConfig);
export {fb};