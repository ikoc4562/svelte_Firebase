import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0L2nL08hc_HFRFhuRc-EP8ECCfrxxYso",
    authDomain: "svelte-cc9b3.firebaseapp.com",
    databaseURL: "https://svelte-cc9b3.firebaseio.com",
    projectId: "svelte-cc9b3",
    storageBucket: "svelte-cc9b3.appspot.com",
    messagingSenderId: "635234739804",
    appId: "1:635234739804:web:186e05ab33e6fb71e1a899"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db=firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
