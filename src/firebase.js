import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBFfLhpxxrBJt1hTPwIenQ-23NbBVUYA3A",
    authDomain: "helloclone.firebaseapp.com",
    databaseURL: "https://helloclone.firebaseio.com",
    projectId: "helloclone",
    storageBucket: "helloclone.appspot.com",
    messagingSenderId: "968175882035",
    appId: "1:968175882035:web:a9d9d72e18b787f4edb846",
    measurementId: "G-8RP5R600VJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth} ;

