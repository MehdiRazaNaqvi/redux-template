




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBFr1dQ3fqkI3hK5BvhzuKHB0D68dE2JNE",
  authDomain: "todo-reac.firebaseapp.com",
  databaseURL: "https://todo-reac-default-rtdb.firebaseio.com",
  projectId: "todo-reac",
  storageBucket: "todo-reac.appspot.com",
  messagingSenderId: "409022064845",
  appId: "1:409022064845:web:6deee3f0cfd0cda2c72184"
};




const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);