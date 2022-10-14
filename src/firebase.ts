import { initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYfm4ZIrXqby7LSdV2N6pKSUcFQqd9ZUI",
  authDomain: "blog-fdb49.firebaseapp.com",
  projectId: "blog-fdb49",
  storageBucket: "blog-fdb49.appspot.com",
  messagingSenderId: "280959583651",
  appId: "1:280959583651:web:402ca52bdb0850fd4a4616",
};

const app = initializeApp(firebaseConfig);

const atuh: Auth = getAuth(app);
const provider: GoogleAuthProvider = new GoogleAuthProvider();
const db: Firestore = getFirestore();

export { atuh, provider, db };
