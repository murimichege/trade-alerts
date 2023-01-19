import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpMJWx7yMQaKCXWPRPO2szcMl81ENsQ5Y",
    authDomain: "alerts-5b01d.firebaseapp.com",
    databaseURL: "https://alerts-5b01d.firebaseio.com",
    projectId: "alerts-5b01d",
    storageBucket: "alerts-5b01d.appspot.com",
    messagingSenderId: "316366125223",
    appId: "1:316366125223:web:b334cd0c2cc1c429678382",
    measurementId: "G-3Q4B7BDZL5"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };