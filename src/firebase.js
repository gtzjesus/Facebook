import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUOtSG8Oe1Hou3Ik5WMM4g82C4wCizzFM",
    authDomain: "thejesusfacebook.firebaseapp.com",
    projectId: "thejesusfacebook",
    storageBucket: "thejesusfacebook.appspot.com",
    messagingSenderId: "492427759791",
    appId: "1:492427759791:web:7bf66d805d3844f82b045a",
    measurementId: "G-5MVBRL9LCX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;