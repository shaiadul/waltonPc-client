// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG2Xh38qxKbeRq4c48WKGWjNe-u5qnq7o",
  authDomain: "walton-pc.firebaseapp.com",
  projectId: "walton-pc",
  storageBucket: "walton-pc.appspot.com",
  messagingSenderId: "810590996886",
  appId: "1:810590996886:web:98670e4a20c37a15fc35b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;