import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "clone-ciryu.firebaseapp.com",
    projectId: "clone-ciryu",
    storageBucket: "clone-ciryu.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID ,
    appId: process.env.FIREBASE_APPID
  };