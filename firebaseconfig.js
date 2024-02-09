import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCteb4Us2_yFCuBJq0BmkkuZ9ACK1C4kGM",
    authDomain: "blog-post-32528.firebaseapp.com",
    projectId: "blog-post-32528",
    storageBucket: "blog-post-32528.appspot.com",
    messagingSenderId: "471183168511",
    appId: "1:471183168511:web:6013a9a0f5ff512a5e4dca",
    measurementId: "G-CL3C892FG6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const Posts = db.collection('Posts');

// module.exports = {Posts};
export default Posts;