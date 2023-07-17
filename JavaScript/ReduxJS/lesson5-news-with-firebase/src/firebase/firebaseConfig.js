import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyD54Osvln-aLkZxHinrth67X7jkR0Trkyk",
    authDomain: "roboteam-dc9c4.firebaseapp.com",
    databaseURL: "https://roboteam-dc9c4-default-rtdb.firebaseio.com",
    projectId: "roboteam-dc9c4",
    storageBucket: "roboteam-dc9c4.appspot.com",
    messagingSenderId: "379407571282",
    appId: "1:379407571282:web:553b69a60759082ede828b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}