import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "auth-app-5e306.appspot.com",
  messagingSenderId: "1014146908522",
  appId: "1:1014146908522:web:ad9358793afbfb91cae513",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
