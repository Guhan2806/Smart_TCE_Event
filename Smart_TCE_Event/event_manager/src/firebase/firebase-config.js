import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr6mNxIxULmgqVIulzLftXhdGf8CzObGE",
  authDomain: "event-management-123ab.firebaseapp.com",
  projectId: "event-management-123ab",
  storageBucket: "event-management-123ab.appspot.com",
  messagingSenderId: "1042146159012",
  appId: "1:1042146159012:web:5875f2498e547f26487931",
  measurementId: "G-LWEJ3MZQJM",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
