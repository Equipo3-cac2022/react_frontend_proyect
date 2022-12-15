// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybPpom9yhaQmNvDCEZ0bTfazNw0aPywQ",
  authDomain: "codo2022-team3.firebaseapp.com",
  projectId: "codo2022-team3",
  storageBucket: "codo2022-team3.appspot.com",
  messagingSenderId: "61895884439",
  appId: "1:61895884439:web:f4170de8e98deaca5a73d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore()