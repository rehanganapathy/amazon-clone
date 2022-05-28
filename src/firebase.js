import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFbt6Txu-gLjgQbkrhVtyp5W7R0lLbTPI",
    authDomain: "clone-rehan.firebaseapp.com",
    projectId: "clone-rehan",
    storageBucket: "clone-rehan.appspot.com",
    messagingSenderId: "1075637022260",
    appId: "1:1075637022260:web:b5f13f3d34cab3dcb4e461",
    measurementId: "G-YGGKR5NZGV"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  export { db, auth };