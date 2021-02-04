
import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/functions'
import 'firebase/auth'
import 'firebaseui';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5v7WlGXoNsqqPlCxW5WgsPw4upnDdJR4",
  authDomain: "dogs-dbfd8.firebaseapp.com",
  projectId: "dogs-dbfd8",
  storageBucket: "dogs-dbfd8.appspot.com",
  messagingSenderId: "943053815049",
  appId: "1:943053815049:web:e7b20f30b758f10927a7d8",
  measurementId: "G-TT0JE7HN8E"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)

//utils
// const auth = firebase.auth()

// export utils/refs
// export {
//   auth
// }

  // export firestore db
  // export default firebaseApp.firestore()