import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJf59mw2RrcRqh2c1gx-k67dUWAqJAGLE",
  authDomain: "uber-next-clone-78e16.firebaseapp.com",
  projectId: "uber-next-clone-78e16",
  storageBucket: "uber-next-clone-78e16.appspot.com",
  messagingSenderId: "928258097875",
  appId: "1:928258097875:web:e5dc5e6a7853deaf26ca26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }