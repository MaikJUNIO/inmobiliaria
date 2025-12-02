// src/services/firebase.js import { initializeApp } from "firebase/app"; import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInAnonymously, signInWithEmailAndPassword, createUserWithEmailAndPassword, } from "firebase/auth"; const firebaseConfig = { apiKey: "TAIzaSyB8ELi62OP0vJz7W8ICD_WkEeeDfT1pv7g", authDomain: "inmobiliaria-89049.firebaseapp.com", projectId: "inmobiliaria-89049", storageBucket: "inmobiliaria-89049.firebasestorage.app", messagingSenderId: "885194280516", appId: "1:885194280516:web:cb15e54d22d4870dc77611", }; const app = initializeApp(firebaseConfig); export const auth = getAuth(app); // Providers export const googleProvider = new GoogleAuthProvider(); export const facebookProvider = new FacebookAuthProvider(); // Login Methods export const loginWithGoogle = () => signInWithPopup(auth, googleProvider); export const loginWithFacebook = () => signInWithPopup(auth, facebookProvider); export const loginAsGuest = () => signInAnonymously(auth); export const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password); export const registerEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);// src/services/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// Login Methods
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
export const loginWithFacebook = () => signInWithPopup(auth, facebookProvider);
export const loginAsGuest = () => signInAnonymously(auth);

export const loginEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
