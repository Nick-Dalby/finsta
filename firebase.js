import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDDQ7M9yReGAXzh7JlpHO-VS1KB0e6syhk",
  authDomain: "finsta-579ad.firebaseapp.com",
  projectId: "finsta-579ad",
  storageBucket: "finsta-579ad.appspot.com",
  messagingSenderId: "173492949480",
  appId: "1:173492949480:web:a38c01503d5b0a4c8e545d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

const storage = getStorage()

export { app, db, storage }