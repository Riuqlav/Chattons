import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLbMB3I7V5qOUJLesKHKHlg2DQhCWDnyU",
  authDomain: "chattons-e2f4d.firebaseapp.com",
  databaseURL: "https://chattons-e2f4d-default-rtdb.firebaseio.com",
  projectId: "chattons-e2f4d",
  storageBucket: "chattons-e2f4d.appspot.com",
  messagingSenderId: "87308902958",
  appId: "1:87308902958:web:71f1cbf29f6bb875e6f5bf",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
