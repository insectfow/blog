import { initializeApp }  from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqZm14M0znRb4dcuAiEfEhhTL883OJNIk",
  authDomain: "dhkim-blog.firebaseapp.com",
  projectId: "dhkim-blog",
  storageBucket: "dhkim-blog.appspot.com",
  messagingSenderId: "459819484223",
  appId: "1:459819484223:web:091a92d938d7d6bbba648a",
  measurementId: "G-3SMLRFGW9Q"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
export {
  db,
  auth
};