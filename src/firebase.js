import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhRbzizXrVsADhJ0n0dJzRk7cT7Mq63iU",
  authDomain: "react-chat-app-fdb0f.firebaseapp.com",
  projectId: "react-chat-app-fdb0f",
  storageBucket: "react-chat-app-fdb0f.appspot.com",
  messagingSenderId: "387130516148",
  appId: "1:387130516148:web:76b62d3a165c52b8b0ade1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
