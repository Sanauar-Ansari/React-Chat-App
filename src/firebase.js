// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXBiuRQx2A93zTdcnveVQfDgCNIRUPUd0",
  authDomain: "reactsecondproject-70129.firebaseapp.com",
  projectId: "reactsecondproject-70129",
  storageBucket: "reactsecondproject-70129.appspot.com",
  messagingSenderId: "162233624121",
  appId: "1:162233624121:web:6c06fd406cae540cc00fe8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
