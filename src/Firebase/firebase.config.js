import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu-_ANjhBy0pte02sIA-FLsroVzCk7KMg",
  authDomain: "wedding-services-156c6.firebaseapp.com",
  projectId: "wedding-services-156c6",
  storageBucket: "wedding-services-156c6.appspot.com",
  messagingSenderId: "965960890519",
  appId: "1:965960890519:web:cfcc581ff30c9caa7991d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth