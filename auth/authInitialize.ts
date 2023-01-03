// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiYe7df8rUxDnxQewvN2oBS5krv2ZGvkY",
  authDomain: "my-medium-6be71.firebaseapp.com",
  projectId: "my-medium-6be71",
  storageBucket: "my-medium-6be71.appspot.com",
  messagingSenderId: "807460614996",
  appId: "1:807460614996:web:e22140f4cd51eeb2318ec1",
  measurementId: "G-71MZ5ZRVQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
