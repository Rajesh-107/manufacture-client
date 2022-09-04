// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbVD7yiClJjsVnyRVhqRyVO1BTcax25lk",
  authDomain: "manufacture-app-eb0cb.firebaseapp.com",
  projectId: "manufacture-app-eb0cb",
  storageBucket: "manufacture-app-eb0cb.appspot.com",
  messagingSenderId: "329035680990",
  appId: "1:329035680990:web:4ec0df6a4919abd14b864f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;