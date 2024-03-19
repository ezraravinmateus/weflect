// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmIyf7FlrvJuq7_lUe6kGNyBzAIg1XSBE",
    authDomain: "weflect-b1ad2.firebaseapp.com",
    projectId: "weflect-b1ad2",
    storageBucket: "weflect-b1ad2.appspot.com",
    messagingSenderId: "208476995621",
    appId: "1:208476995621:web:e11bc0c78d328ae8daffcc",
    measurementId: "G-GEFPB1Z888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
