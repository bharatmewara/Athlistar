import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC8y0PAza7JbDVYh5eam1LUm7JCnuCjt38",
  authDomain: "athelistar.firebaseapp.com",
  projectId: "athelistar",
  storageBucket: "athelistar.firebasestorage.app",
  messagingSenderId: "850736423805",
  appId: "1:850736423805:web:591f0b9512e8492e742214"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export default app;