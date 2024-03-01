import { initializeApp } from "firebase/app";
import  {getFirestore}  from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbE6Rw-c_04v6c8smDzDEDZ4t8akJ2_y0",
  authDomain: "nazarbekproject.firebaseapp.com",
  projectId: "nazarbekproject",
  storageBucket: "nazarbekproject.appspot.com",
  messagingSenderId: "198224154029",
  appId: "1:198224154029:web:1ee1f57c9f2f9951662524",
};

const app = initializeApp(firebaseConfig);

 export const firestore =   getFirestore(app)
