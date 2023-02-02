import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//Next line activate for the first start when you create firebase DB
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyC2IALb_GvDevL7jJ2Yp7tRcRkG206m3Nc",
  authDomain: "netflix-clone-52929.firebaseapp.com",
  projectId: "netflix-clone-52929",
  storageBucket: "netflix-clone-52929.appspot.com",
  messagingSenderId: "170004166372",
  appId: "1:170004166372:web:0d3d7eb63be662cbe85ef1",
};

const firebase = Firebase.initializeApp(config);

/*Next line activate for the first start when you create firebase DB on first seeding. After you seed data in DB firebase 
please comment aggain next line.*/
//seedDatabase(firebase);

export { firebase };
