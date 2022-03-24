import * as firebase from 'firebase'
//import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_wwY5s8a5CXBT6HHqqgPxC2NgMT1chT8",
  authDomain: "rn-ig-clone-c2be7.firebaseapp.com",
  projectId: "rn-ig-clone-c2be7",
  storageBucket: "rn-ig-clone-c2be7.appspot.com",
  messagingSenderId: "567651402816",
  appId: "1:567651402816:web:af4ab1451227a4dabc8ba5"
};

//Initialize Firebase
!firebase.app.appId ? firebase.initializeApp(firebaseConfig) : firebase.app()

//const db = firebase.firestore
export default firebase
//export default {firebase, db}