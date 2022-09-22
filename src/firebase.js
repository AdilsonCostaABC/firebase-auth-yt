// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJdkQPw1iL7DDUnuFCamxQhSl8N_s_ZBs",
  authDomain: "fir-auth-yt-d3627.firebaseapp.com",
  projectId: "fir-auth-yt-d3627",
  storageBucket: "fir-auth-yt-d3627.appspot.com",
  messagingSenderId: "784668179623",
  appId: "1:784668179623:web:3fdeb5e21d8fbfd928af82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;