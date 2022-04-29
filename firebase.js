import * as firebase from "firebase";
import "firebase/firestore";
import "firebasae/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAfGrUGeqv162mLProji1WUJYZerw0t3K8",
  authDomain: "chat-app-3fb1b.firebaseapp.com",
  projectId: "chat-app-3fb1b",
  storageBucket: "chat-app-3fb1b.appspot.com",
  messagingSenderId: "788077091301",
  appId: "1:788077091301:web:e15a097a0bc6979050770c",
};

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


const db = ap.firestore();
const auth = firebase.auth();