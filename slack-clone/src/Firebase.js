import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq2K7tmV7KEJj18SU1hbwDlu4nSDqhyFs",
  authDomain: "slack-clone-8dc37.firebaseapp.com",
  databaseURL: "https://slack-clone-8dc37.firebaseio.com",
  projectId: "slack-clone-8dc37",
  storageBucket: "slack-clone-8dc37.appspot.com",
  messagingSenderId: "597981284039",
  appId: "1:597981284039:web:5fe4779ff59f7f8bcca0e2",
  measurementId: "G-CHCXZ86FCK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
