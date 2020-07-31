import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBTLKoyFd3vtyc_aH6ixVxjv-H714rgXdg',
  authDomain: 'ovie-db.firebaseapp.com',
  databaseURL: 'https://ovie-db.firebaseio.com',
  projectId: 'ovie-db',
  storageBucket: 'ovie-db.appspot.com',
  messagingSenderId: '382053406013',
  appId: '1:382053406013:web:f42b4688dbd7d5bf6b2154',
  measurementId: 'G-0114T0LDE1',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
