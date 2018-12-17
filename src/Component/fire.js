import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDvJsVwc3N873sQCZhhZYNiu7TRctGJLYM",
  authDomain: "react-46329.firebaseapp.com",
  databaseURL: "https://react-46329.firebaseio.com",
  projectId: "react-46329",
  storageBucket: "react-46329.appspot.com",
  messagingSenderId: "611655407917"
};
const fire = firebase.initializeApp(config);

export default fire;