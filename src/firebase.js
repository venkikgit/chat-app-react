// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65tcYWggR850a1Eq9GefA3i84TmIevs8",
  authDomain: "chat-react-app-7b9f5.firebaseapp.com",
  projectId: "chat-react-app-7b9f5",
  storageBucket: "chat-react-app-7b9f5.appspot.com",
  messagingSenderId: "349402632963",
  appId: "1:349402632963:web:10c0f6fc5f5402d6a74f36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();