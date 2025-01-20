// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Rtbjk2ftTNSTCh38aQZbf0TiUuJE8UU",
  authDomain: "my-book-store-4e6ac.firebaseapp.com",
  projectId: "my-book-store-4e6ac",
  storageBucket: "my-book-store-4e6ac.appspot.com",
  messagingSenderId: "288155355915",
  appId: "1:288155355915:web:0ef7720f415283fec7f00e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;