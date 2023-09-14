// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, deleteDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js';


const firebaseConfig = {
    apiKey: "AIzaSyBqrIrX7ovjL-utttudQ5MyQN3B2UVEhOI",
    authDomain: "meditanshya-594a1.firebaseapp.com",
    projectId: "meditanshya-594a1",
    storageBucket: "meditanshya-594a1.appspot.com",
    messagingSenderId: "693956544545",
    appId: "1:693956544545:web:00d8d274bd9c28b4333b60"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.useDeviceLanguage();
export { auth, onAuthStateChanged, app, doc, getFirestore, getDoc, setDoc, signOut };
var newUserWelcome = document.querySelector('.newUserWelcome');
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const displayName = user.displayName;
        newUserWelcome.innerHTML = `Welcome, ${displayName || 'User'}!`;
    } else {
        // User is signed out
        
        newUserWelcome.innerHTML = 'New Customer? <a href="signup.html">Register</a>'
    }
})