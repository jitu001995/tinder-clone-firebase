import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAIcNQqj8rDcyXmwhgJTC9pej6prA0hHSM",
    authDomain: "tinder-clone-firebase-9ff17.firebaseapp.com",
    projectId: "tinder-clone-firebase-9ff17",
    storageBucket: "tinder-clone-firebase-9ff17.appspot.com",
    messagingSenderId: "550935437495",
    appId: "1:550935437495:web:1b0feea70d515604a4ad32"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()

  export default db;