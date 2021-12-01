import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAc8DNqcHit6DXluQ5qY5wfwBxcIqSR5QE",

  authDomain: "project-67-ce450.firebaseapp.com",

  projectId: "project-67-ce450",

  storageBucket: "project-67-ce450.appspot.com",

  messagingSenderId: "1070189548596",

  appId: "1:1070189548596:web:a106e393395c60cd3ce661"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
