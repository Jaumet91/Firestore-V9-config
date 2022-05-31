// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0Decf0dB_gMSi5o31mhC17a7GQ2KvPGQ',
  authDomain: 'sql-demos-44a36.firebaseapp.com',
  projectId: 'sql-demos-44a36',
  storageBucket: 'sql-demos-44a36.appspot.com',
  messagingSenderId: '1092851298403',
  appId: '1:1092851298403:web:5ba64d2899c872c6e4c856',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log('Firebase configurado');

export default getFirestore();
