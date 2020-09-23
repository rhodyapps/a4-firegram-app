import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDiOgpcCkuN1ObDV1zJSk5PlQjBBTs4jE4",
    authDomain: "a4-firegram.firebaseapp.com",
    databaseURL: "https://a4-firegram.firebaseio.com",
    projectId: "a4-firegram",
    storageBucket: "a4-firegram.appspot.com",
    messagingSenderId: "777873835334",
    appId: "1:777873835334:web:a1b10483c6fe1f381cd147"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  export { projectStorage, projectFirestore };

 
