// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMa1QpITc5qaq6A6XJwn3M5Viqh_IcQPo",
    authDomain: "nnabi-warehouse.firebaseapp.com",
    projectId: "nnabi-warehouse",
    storageBucket: "nnabi-warehouse.appspot.com",
    messagingSenderId: "491363680880",
    appId: "1:491363680880:web:04dd2219e78bd30948eab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;