import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCWge5n0y4xZkhYDrSOd0__ri6JSC1sIMM",
    authDomain: "problem-fixing-app.firebaseapp.com",
    databaseURL: "https://problem-fixing-app.firebaseio.com",
    projectId: "problem-fixing-app",
    storageBucket: "problem-fixing-app.appspot.com",
    messagingSenderId: "285042862085",
    appId: "1:285042862085:web:bc971845cb672aea03146c",
    measurementId: "G-YDG872Q17D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase.firestore();