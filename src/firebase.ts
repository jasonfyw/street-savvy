import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';




const firebaseConfig = {
    apiKey: "AIzaSyBIcQP9z74hepEP-LPhimupyDxRqNBGa8c",
    authDomain: "travel-budget-app-5cfe4.firebaseapp.com",
    projectId: "travel-budget-app-5cfe4",
    storageBucket: "travel-budget-app-5cfe4.appspot.com",
    messagingSenderId: "52010138671",
    appId: "1:52010138671:web:51889ec25c1bff1b86dada",
    measurementId: "G-JC65QTHBZ2"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();
