import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCJxL4vw_gBo9ihU9B-nz5wdF2aElP0rsQ",

  authDomain: "houseprojectgmr.firebaseapp.com",

  projectId: "houseprojectgmr",

  storageBucket: "houseprojectgmr.appspot.com",

  messagingSenderId: "663889814092",

  appId: "1:663889814092:web:0eab9280426fae25120ae9",

  measurementId: "G-NQB223W4Y2"

};


// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
