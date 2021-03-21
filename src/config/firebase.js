import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAL2L6OXl774SOCsSE592j4iLlcMzzZe4",
  authDomain: "futebol-2cf8c.firebaseapp.com",
  databaseURL: "https://futebol-2cf8c-default-rtdb.firebaseio.com",
  projectId: "futebol-2cf8c",
  storageBucket: "futebol-2cf8c.appspot.com",
  messagingSenderId: "1032347306883",
  appId: "1:1032347306883:web:8cca31713b7780bdba44b6",
  measurementId: "G-FTK6QR23G4"
};

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
