// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJE4gFst4fwIABMWtvHpL9P3aOsXEQo1w",
    authDomain: "netflix-boo-7f2ff.firebaseapp.com",
    projectId: "netflix-boo-7f2ff",
    storageBucket: "netflix-boo-7f2ff.appspot.com",
    messagingSenderId: "934797654719",
    appId: "1:934797654719:web:8e700a33bfc51db238240a"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }