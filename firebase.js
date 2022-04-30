// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// import "firebase/firestore";
// import "firebase/auth";
import 'firebase/compat/auth';
 


const firebaseConfig = {
  apiKey: "AIzaSyAfGrUGeqv162mLProji1WUJYZerw0t3K8",
  authDomain: "chat-app-3fb1b.firebaseapp.com",
  projectId: "chat-app-3fb1b",
  storageBucket: "chat-app-3fb1b.appspot.com",
  messagingSenderId: "788077091301",
  appId: "1:788077091301:web:e15a097a0bc6979050770c",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };