let firebase = require('firebase').default
let environments = require('../config/config').firebase

if (!firebase.apps.length) {
  firebase.initializeApp(environments);
}
const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();

// Signup
exports.doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Signin
exports.doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Signout
exports.doSignOut = () =>
  auth.signOut();

// Reset Password
exports.resetPassword = (email) =>
  auth.sendPasswordResetEmail(email);

// Change Password
exports.changePassword = (password) =>
  auth.currentUser.updatePassword(password);


exports.auth = auth
exports.firestore = firestore
exports.database = database