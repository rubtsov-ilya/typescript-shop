import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkQUI1rNijZjZkgOdYf8TJUq5cFpv7Aow",
  authDomain: "auth-shop-598f7.firebaseapp.com",
  projectId: "auth-shop-598f7",
  storageBucket: "auth-shop-598f7.appspot.com",
  messagingSenderId: "668669687764",
  appId: "1:668669687764:web:5c4d8184be682b155d0841"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp }
