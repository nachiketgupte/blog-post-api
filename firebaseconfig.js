import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import firebaseConfig from "./firebaseMethods.js";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const Posts = db.collection('Posts');

// module.exports = {Posts};
export default Posts;