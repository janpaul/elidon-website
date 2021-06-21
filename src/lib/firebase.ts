import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import format from 'date-fns/format'

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

export const logHit = (win: Window) => {
  const db = firebase.firestore()
  const { navigator } = window
  console.log({ window })
  const { language, platform, geolocation } = navigator
  geolocation.getCurrentPosition((position: GeolocationPosition) => {
    db.collection('hits')
      .add({ timestamp: format(Date.now(), 'yyyyMMdd-HH:mm:ssX'), language, platform, position })
      .then(docRef => {
        // console.log('Document written with ID: ', docRef.id)
      })
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  })
}
