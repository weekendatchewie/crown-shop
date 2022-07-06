import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBQyuR4x3amGrSXEM4JtCya1SBPMR3By5w",
    authDomain: "crown-shop-db-740c5.firebaseapp.com",
    projectId: "crown-shop-db-740c5",
    storageBucket: "crown-shop-db-740c5.appspot.com",
    messagingSenderId: "223732827382",
    appId: "1:223732827382:web:f349db16fd851478b458d7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

// Authentication
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
