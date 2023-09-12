// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// import { getFirestore, collection, addDoc, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js';


// Your Firebase configuration
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
var loginForm = document.getElementById('login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // User successfully logged in
            const user = userCredential.user;

            // Redirect to a different page or perform other actions as needed
        })
        .catch((error) => {
            // Handle login errors
            const errorCode = error.code;
            let errorMessage = error.message;

            switch (errorCode) {
                case 'auth/user-not-found':
                    errorMessage = 'No user found with this email address.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Invalid password. Please try again.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address. Please double-check the email format.';
                    break;
                // Add more cases for other error codes as needed
                default:
                    errorMessage = 'An error occurred during login. Please try again later.';
                    break;
            }

            // Display the customized error message to the user
            alert(errorMessage);
        });
});

// registerForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevent the form from submitting and refreshing the page
//     var registerUsername = document.getElementById('registerUsername').value;
//     var registerEmail = document.getElementById('registerEmail').value;
//     var registerPassword = document.getElementById('registerPassword').value;
//     var registerConfirmPassword = document.getElementById('registerConfirmPassword').value;
    
//     if (registerPassword !== registerConfirmPassword) {
//         alert('Passwords are not matching.');
//     } else {
//         createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             var userID = user.uid;
//             updateProfile(user, {
//                 displayName: registerUsername
//             })
//             console.log('User registered:', user);
//         })
//         .catch((err) => {
//             const errorCode = err.code;
//             let errorMessage = err.message;
            
//             switch (errorCode) {
//                 case 'auth/email-already-in-use':
//                 errorMessage = 'The email address is already in use. Please use a different email.';
//                 break;
//                 case 'auth/invalid-email':
//                 errorMessage = 'Invalid email address. Please double-check the email format.';
//                 break;
//                 case 'auth/operation-not-allowed':
//                 errorMessage = 'Registration is not allowed at the moment. Please try again later.';
//                 break;
//                 case 'auth/weak-password':
//                 errorMessage = 'The password is too weak. Please use a stronger password.';
//                 break;
//                 // Add more cases for other error codes as needed
//                 default:
//                 errorMessage = 'An error occurred during registration. Please try again later.';
//                 break;
//             }
            
//             // Display the customized error message to the user
//             alert(errorMessage);
//         });
//     }
// });



window.onload = () => {
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
    });
}

document.getElementById('logout').onclick = function() {
    const user = auth.currentUser;
    if (user) {
        signOut(auth)
            .then(async () => {
                // Remove the user's document from Firestore
                alert('Logged Out!');
            })
            .catch((error) => {
                alert(error);
            });
    } else {
        alert('User is not authenticated.');
    }
}

