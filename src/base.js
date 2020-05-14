import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPTMGK7Po_iT2bFQqzfYZaoQu2c5Gfubs",
  authDomain: "tombola-chessmove.firebaseapp.com",
  databaseURL: "https://tombola-chessmove.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
