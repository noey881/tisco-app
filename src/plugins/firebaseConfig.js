import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyC5GXQbsneNH3ko8VtDNY067PU5tpr9rgI",
        authDomain: "tisco-exam.firebaseapp.com",
        databaseURL: "https://tisco-exam-default-rtdb.firebaseio.com",
        projectId: "tisco-exam",
        storageBucket: "tisco-exam.appspot.com",
        messagingSenderId: "758903092800",
        appId: "1:758903092800:web:39c7f524f0413b000ed1a5"
      }
      const firebaseApp = firebase.initializeApp(firebaseConfig)

   firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

}

export const db = firebase.firestore()