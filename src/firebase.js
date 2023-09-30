// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPNABX_LnZHrvyw4pT2AaIzKkRzrHTywg",
  authDomain: "fir-tutorial-e4daa.firebaseapp.com",
  projectId: "fir-tutorial-e4daa",
  storageBucket: "fir-tutorial-e4daa.appspot.com",
  messagingSenderId: "520942588970",
  appId: "1:520942588970:web:376b34b5a3da022e87df53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;