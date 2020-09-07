import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyC-DtgVRuYT0LXqu--amIVol0q6M7-F6Ik",
    authDomain: "realtime-todos-fd104.firebaseapp.com",
    databaseURL: "https://realtime-todos-fd104.firebaseio.com",
    projectId: "realtime-todos-fd104",
    storageBucket: "realtime-todos-fd104.appspot.com",
    messagingSenderId: "1090689973158",
    appId: "1:1090689973158:web:d0081f6ab1296d164aed67",
    measurementId: "G-PS942ECTLG"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();