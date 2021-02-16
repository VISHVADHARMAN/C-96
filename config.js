import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDH1RvEZpt1XmOs8PbcgWBJmxGzaomC8J0",
    authDomain: "hydromax-167dd.firebaseapp.com",
    projectId: "hydromax-167dd",
    storageBucket: "hydromax-167dd.appspot.com",
    messagingSenderId: "463226429888",
    appId: "1:463226429888:web:5745b8f447a70c4577e825"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
