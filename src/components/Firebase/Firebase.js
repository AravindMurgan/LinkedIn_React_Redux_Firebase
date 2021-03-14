import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2fD3J_KuIt8glvcyIg5m_AmmX5aNK-hk",
    authDomain: "linkedin-react-redux-firebase.firebaseapp.com",
    projectId: "linkedin-react-redux-firebase",
    storageBucket: "linkedin-react-redux-firebase.appspot.com",
    messagingSenderId: "283511420058",
    appId: "1:283511420058:web:4acffbb5541e2a712d9b23"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};