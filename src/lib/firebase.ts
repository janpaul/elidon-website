import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBelJSnzNSMWlrHDkugLw_9uZfRABnVp9M',
  authDomain: 'elidon-website.firebaseapp.com',
  projectId: 'elidon-website',
  storageBucket: 'elidon-website.appspot.com',
  messagingSenderId: '1060768238156',
  appId: '1:1060768238156:web:a7e3f4220269f4e2b242e9',
  measurementId: 'G-K39GZ48WYB',
}
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}
