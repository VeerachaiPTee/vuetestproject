import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCb6Q8f3vk2mZNdXzIjf2PS8zcyMofk4EY",
  authDomain: "vue3projectfinal.firebaseapp.com",
  projectId: "vue3projectfinal",
  storageBucket: "vue3projectfinal.appspot.com",
  messagingSenderId: "1057622107545",
  appId: "1:1057622107545:web:210d0d613ed0d7a3c79f08",
  measurementId: "G-C9CQF7XJMN",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
