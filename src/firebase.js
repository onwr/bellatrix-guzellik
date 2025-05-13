import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_1XyUlWWW9-dJ5raq2b7SQHpmWjvPfiE',
  authDomain: 'bella-trix-salon.firebaseapp.com',
  projectId: 'bella-trix-salon',
  storageBucket: 'bella-trix-salon.firebasestorage.app',
  messagingSenderId: '525513810268',
  appId: '1:525513810268:web:3f0a5e225ab4454cf0a199',
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
