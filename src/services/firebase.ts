import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCNHu0fKZadgmUZRMn01GUGFmiytkB20Q0',
  authDomain: 'clone-dfa82.firebaseapp.com',
  projectId: 'clone-dfa82',
  storageBucket: 'clone-dfa82.appspot.com',
  messagingSenderId: '695656787556',
  appId: '1:695656787556:web:8f02f8d97fe8e4eefb7971',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
