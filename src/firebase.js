import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDBx0uHwohkyHTU2iRXhD3qnU3fL_ftwVk",
        authDomain: "clone-3c5aa.firebaseapp.com",
        databaseURL: "https://clone-3c5aa.firebaseio.com",
        projectId: "clone-3c5aa",
        storageBucket: "clone-3c5aa.appspot.com",
        messagingSenderId: "939028800529",
        appId: "1:939028800529:web:43d45be75253da59eefdb0",
        measurementId: "G-QCDYLRSL0T"   
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };