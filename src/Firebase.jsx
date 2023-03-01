import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJKICVSEAH4yAaZa9OgQU7wsmFqN1BmtU",
  authDomain: "artsy-pro.firebaseapp.com",
  projectId: "artsy-pro",
  storageBucket: "artsy-pro.appspot.com",
  messagingSenderId: "693784633272",
  appId: "1:693784633272:web:d3908ce20b709085f1794d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
