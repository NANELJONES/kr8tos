import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage"


const firebaseConfig = {
    apiKey: process.env.API,
    authDomain: "peepandlearn-f50e4.firebaseapp.com",
    projectId: "peepandlearn-f50e4",
    storageBucket: "peepandlearn-f50e4.appspot.com",
    messagingSenderId: "411842326622",
    appId: "1:411842326622:web:4ae7bba328341bf3cac4cf"
  };

 const  app = initializeApp(firebaseConfig);
  export const db = getFirestore();
  export const storage = getStorage(app);
 
  
 