import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// const config = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
// };

var config = {
    apiKey: "AIzaSyDxRJL9mwqy3CoqOqI72zrIGHwI-044gqE",
    authDomain: "a-cat-with-a-hat.firebaseapp.com",
    databaseURL: "https://a-cat-with-a-hat.firebaseio.com",
    projectId: "a-cat-with-a-hat",
    storageBucket: "a-cat-with-a-hat.appspot.com",
    messagingSenderId: "258574423737"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;