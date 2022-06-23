import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjtWhz8RlGXSn1SeXL6j3C3FaROHqvork",
  authDomain: "starbucks-7bba2.firebaseapp.com",
  projectId: "starbucks-7bba2",
  storageBucket: "starbucks-7bba2.appspot.com",
  messagingSenderId: "495906065031",
  appId: "1:495906065031:web:01f11fab988ce95a408622",
  measurementId: "G-90XEF2KLFB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
