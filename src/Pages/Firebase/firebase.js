import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { config } from '../../key';


var Config = config;

class Firebase {
  constructor() {
    app.initializeApp(Config);

    this.auth = app.auth();
    this.db = app.database();


    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doUpdateDisplayeNameAndCatNhAt = displayName =>
    this.auth.currentUser.doUpdateDisplayeNameAndCatNhAt(displayName);

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };

            next(authUser);
          });

      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Hats API ***

  hat = uid => this.db.ref(`hats/${uid}`);

  hats = () => this.db.ref('hats');

  // *** Cats API ***

  cat = uid => this.db.ref(`cats/${uid}`);

  cats = () => this.db.ref('cats');
}

export default Firebase;