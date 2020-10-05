import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2I0-8K6_jKNXInK4PyG9YO037vw3eEpE",
  authDomain: "twitter-clone-85893.firebaseapp.com",
  databaseURL: "https://twitter-clone-85893.firebaseio.com",
  projectId: "twitter-clone-85893",
  storageBucket: "twitter-clone-85893.appspot.com",
  messagingSenderId: "743536191407",
  appId: "1:743536191407:web:b379c74e7746345359f15a",
  measurementId: "G-Q2MMXE1SR1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
