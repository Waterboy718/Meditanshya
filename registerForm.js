// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, deleteDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const Googleprovider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider();
const Facebookprovider = new FacebookAuthProvider();
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
auth.useDeviceLanguage();
export { auth, onAuthStateChanged, getFirestore, app, doc, getDoc, setDoc };


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
const registerForm = document.getElementById('register')
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    var registerUsername = document.getElementById('registerUsername').value;
    var registerEmail = document.getElementById('registerEmail').value;
    var registerPassword = document.getElementById('registerPassword').value;
    var registerConfirmPassword = document.getElementById('registerConfirmPassword').value;

    if (registerPassword !== registerConfirmPassword) {
        alert('Passwords are not matching.');
    } else {
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then(async (userCredential) => {
            const user = userCredential.user;
            var userID = user.uid;

            // Update the user's display name and store their user ID
            await updateProfile(user, {
                displayName: registerUsername,
            });

            // Add the user's theme and user ID to Firestore
            await addThemeAndUserIDToFirestore(userID, 'light', registerUsername, registerEmail, registerPassword); // Change 'light' to the actual theme value
            alert('registered! :)')
        })
        .catch((err) => {
            const errorCode = err.code;
            let errorMessage = err.message;

            switch (errorCode) {
                case 'auth/email-already-in-use':
                    errorMessage = 'The email address is already in use. Please use a different email.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address. Please double-check the email format.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = 'Registration is not allowed at the moment. Please try again later.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'The password is too weak. Please use a stronger password.';
                    break;
                // Add more cases for other error codes as needed
                default:
                    errorMessage = 'An error occurred during registration. Please try again later.';
                    break;
            }

            // Display the customized error message to the user
            alert(errorMessage);
        });
    }
});



// document.getElementById('logout').onclick = function() {
//     const user = auth.currentUser;
//     if (user) {
//         signOut(auth)
//             .then(async () => {
//                 // Remove the user's document from Firestore
//                 const userID = user.uid;
//                 // await removeUserDocumentFromFirestore(userID);
//                 alert('Logged Out!');
//             })
//             .catch((error) => {
//                 alert(error);
//             });
//     } else {
//         alert('User is not authenticated.');
//     }
// }



////////////////////////////////////////////////
const db = getFirestore(app);

const addThemeAndUserIDToFirestore = async (userID, theme, username, email, password) => {
    const collectionRef = collection(db, 'users'); // Replace with your collection name
    const data = {
        theme: theme,
        userID: userID, // Include the user ID in the Firestore data
        username: username,
        email: email,
        password: password
        // Add more fields as needed
    };

    try {
        const docRef = await setDoc(doc(collectionRef, userID), data); // Set the document with the user's ID as the document ID
    } catch (error) {}
};

async function removeUserDocumentFromFirestore(userID) {
    const db = getFirestore(app);
    const collectionRef = collection(db, 'users'); // Replace with your collection name

    try {
        await deleteDoc(doc(collectionRef, userID)); // Delete the document with the user's ID
    } catch (error) {}
}

const google = document.querySelector('.google');
google.addEventListener('click', () => {
    signInWithPopup(auth, Googleprovider)
    .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        const displayNameParts = user.displayName.split(' ');
        const firstName = displayNameParts[0];
        // You can use the first name as the username
        const username = firstName;

        // Update the user's display name and username
        await updateProfile(user, {
            displayName: username
        });
        // console.log(user);
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert("An error occured. Please try later.")
    });
})

const github = document.querySelector('.github');
github.addEventListener('click', () => {
    signInWithPopup(auth, Githubprovider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        // The signed-in user info.
        const user = result.user;
        // console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
        alert("An error occured. Please try later.")
    });
})

// document.querySelector('.facebook')
// .addEventListener('click', () => {
//     signInWithPopup(auth, Facebookprovider)
//     .then((result) => {
//         // The signed-in user info.
//         const user = result.user;
        
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accessToken = credential.accessToken;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//     })
//     .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message
//         alert("An error occured. Please try later.")
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = FacebookAuthProvider.credentialFromError(error);
        
//         // ...
//     });

// })

// signOut(aut h)