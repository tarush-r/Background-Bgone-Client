// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
// // Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const clientCredentials = {
  apiKey: "AIzaSyAyEipM0cgYjCyZGhZF2cJewwWYf08IkRY",
  authDomain: "keystone-295p.firebaseapp.com",
  projectId: "keystone-295p",
  storageBucket: "keystone-295p.appspot.com",
  messagingSenderId: "578988953035",
  appId: "1:578988953035:web:a9bfb5e4a6d904d0f8fa4e",
  measurementId: "G-LES89K6YL1",
};

export const app = initializeApp(clientCredentials)
export const auth = getAuth()

// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
// }

// export default firebase;
