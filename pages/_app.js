import '../styles/global.css'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAg6i3rqFaetUMIpDUVEmWBQPOAZcYTsHY",
  authDomain: "testproject-17ecc.firebaseapp.com",
  projectId: "testproject-17ecc",
  storageBucket: "testproject-17ecc.appspot.com",
  messagingSenderId: "73381993698",
  appId: "1:73381993698:web:efcead3033f297917492bb",
  measurementId: "G-E3J0HQNL1Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
