import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';




let firebaseConfig = {
    apiKey: "AIzaSyBvv2FuJCL89AXDGtcnuLWul8VM7qbmRCs",
    authDomain: "financas-25555.firebaseapp.com",
    projectId: "financas-25555",
    storageBucket: "financas-25555.appspot.com",
    messagingSenderId: "653748541343",
    appId: "1:653748541343:web:a13d844197d38ec5538faa",
    measurementId: "G-3K002XJC1H"
  };

  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }
  
  export default firebase;