import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy-IHmMv68ODedHyF3_qQ2BehUgq0-Ij0",
  authDomain: "artsy-dev-9668f.firebaseapp.com",
  projectId: "artsy-dev-9668f",
  storageBucket: "artsy-dev-9668f.appspot.com",
  messagingSenderId: "829944167632",
  appId: "1:829944167632:web:9d6db519acecb5ba0bb2d5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
