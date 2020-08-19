import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4wbFVo16sTJn-2-Y96yna9fr2UzmUHFU',
  authDomain: 'ollie-dca6a.firebaseapp.com',
  databaseURL: 'https://ollie-dca6a.firebaseio.com',
  projectId: 'ollie-dca6a',
  storageBucket: 'ollie-dca6a.appspot.com',
  messagingSenderId: '1014020633104',
  appId: '1:1014020633104:web:b1b28db5d37cd6cf775095',
  measurementId: 'G-Y6ZT82QK2W'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
