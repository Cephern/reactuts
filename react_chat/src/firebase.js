import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjVYMER-tnBFl6EHzzGqFjIuT9lvECOfk",
  authDomain: "reactchat-23fd1.firebaseapp.com",
  projectId: "reactchat-23fd1",
  storageBucket: "reactchat-23fd1.appspot.com",
  messagingSenderId: "707270801128",
  appId: "1:707270801128:web:d0181d62544031b673bb5d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
