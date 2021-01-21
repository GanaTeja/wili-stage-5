import firebase from 'firebase'
import _default from 'react-navigation-tabs/lib/typescript/src/navigators/createBottomTabNavigator';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBc0ywsSPngi1I-4INyFcX5qYwe59ttgS0",
    authDomain: "c58-buzzer.firebaseapp.com",
    databaseURL: "https://c58-buzzer.firebaseio.com",
    projectId: "c58-buzzer",
    storageBucket: "c58-buzzer.appspot.com",
    messagingSenderId: "257825868810",
    appId: "1:257825868810:web:1b093e01ae56e655cea3f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()