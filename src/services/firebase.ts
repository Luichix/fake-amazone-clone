import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDjndKFyQquRDBWlXfDw04Xaie1u5DBHmY',
  authDomain: 'challenge-1c21a.firebaseapp.com',
  databaseURL: 'https://challenge-1c21a-default-rtdb.firebaseio.com',
  projectId: 'challenge-1c21a',
  storageBucket: 'challenge-1c21a.appspot.com',
  messagingSenderId: '356843030277',
  appId: '1:356843030277:web:b650852c71d9293091d96c',
  measurementId: 'G-EDSE87GHTL',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
