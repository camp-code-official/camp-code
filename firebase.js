// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqfJN22AYzDo0M08UJqGf5y1j_sEcpoVM",
  authDomain: "camp-code-auth.firebaseapp.com",
  projectId: "camp-code-auth",
  storageBucket: "camp-code-auth.appspot.com",
  messagingSenderId: "55915909282",
  appId: "1:55915909282:web:eb8ade8b7e91dd8019c7fb",
  measurementId: "G-2NKF6W8K1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);