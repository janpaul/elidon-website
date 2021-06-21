import dynamic from 'next/dynamic'

const firebaseConfig = {
  apiKey: 'AIzaSyBelJSnzNSMWlrHDkugLw_9uZfRABnVp9M',
  authDomain: 'elidon-website.firebaseapp.com',
  projectId: 'elidon-website',
  storageBucket: 'elidon-website.appspot.com',
  messagingSenderId: '1060768238156',
  appId: '1:1060768238156:web:a7e3f4220269f4e2b242e9',
  measurementId: 'G-K39GZ48WYB',
}

// import firebase from 'firebase/app'
dynamic(() =>
  import('firebase/app').then(firebase => {
    require('firebase/analytics')
    require('firebase/firestore')
    console.log({ firebase })
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
      firebase.analytics()
    }
  })
)
//
//
//

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig)
//   firebase.analytics()
// }
