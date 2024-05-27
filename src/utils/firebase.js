// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCcs9AsuxUFm8w4OKg1SmiRc5u_BRLLPNs",
  authDomain: "food-ordering-app-8b357.firebaseapp.com",
  projectId: "food-ordering-app-8b357",
  storageBucket: "food-ordering-app-8b357.appspot.com",
  messagingSenderId: "1062475531788",
  appId: "1:1062475531788:web:976467bd14531d4cc3d029",
  measurementId: "G-042Q9HKGMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();