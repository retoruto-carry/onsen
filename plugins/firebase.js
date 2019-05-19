import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCrg4oD0MyGZKvMzk8gwVisCjmaBKXrBhs',
    authDomain: 'onsen-935ff.firebaseapp.com',
    databaseURL: 'https://onsen-935ff.firebaseio.com',
    projectId: 'onsen-935ff',
    storageBucket: 'onsen-935ff.appspot.com',
    messagingSenderId: '966986845831',
    appId: '1:966986845831:web:b8067044a2cc8ac3'
  })
}

export default firebase
