// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-1YMYfhVuWQ6z12ekaH0KkVmKaCXEjWI",
  authDomain: "all-questions-bank.firebaseapp.com",
  projectId: "all-questions-bank",
  storageBucket: "all-questions-bank.appspot.com",
  messagingSenderId: "146848274484",
  appId: "1:146848274484:web:a8ec63cc4139179a861261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;