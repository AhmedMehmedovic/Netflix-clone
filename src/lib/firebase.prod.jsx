import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { config } from "./personalInfo";
//Next line activate for the first start when you create firebase DB
//import { seedDatabase } from "../seed";

const firebase = Firebase.initializeApp(config);

/*Next line activate for the first start when you create firebase DB on first seeding. After you seed data in DB firebase 
please comment aggain next line.*/
//seedDatabase(firebase);

export { firebase };
