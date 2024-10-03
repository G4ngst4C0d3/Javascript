// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHQlP-sCR1fd2GiNqMSBekJiuzBxC1jD4",
  authDomain: "cursojs-34c5b.firebaseapp.com",
  projectId: "cursojs-34c5b",
  storageBucket: "cursojs-34c5b.appspot.com",
  messagingSenderId: "735384766374",
  appId: "1:735384766374:web:2d0d0ca5ecf22e44ac7167",
  measurementId: "G-5WT75C4ZQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = analytics.firestore();
db.collection("turmaA").get()
  .then((snapshot) => {
    snapshot.foreach((doc) => {
      console.log(doc.data());
    })
  })