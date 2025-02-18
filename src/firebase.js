import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhkwpAm5m9dMDGzMlA-DkOxvUY_a60Zts",
  authDomain: "bookrental-t.firebaseapp.com",
  projectId: "bookrental-t",
  storageBucket: "bookrental-t.firebasestorage.app",
  messagingSenderId: "13147389735",
  appId: "1:13147389735:web:8be287896188e7a9c77302",
  measurementId: "G-ZTC5KYVMP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
