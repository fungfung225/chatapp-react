import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAbc_e8-cn--VgGCIucHEN_YH_A6FnYRvA",
  
    authDomain: "chatapp-e0929.firebaseapp.com",
  
    projectId: "chatapp-e0929",
  
    storageBucket: "chatapp-e0929.appspot.com",
  
    messagingSenderId: "252636273218",
  
    appId: "1:252636273218:web:503e2321b525228bf5abdb"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();


export default db;