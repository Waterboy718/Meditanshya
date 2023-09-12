const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Function to create user data in the Realtime Database
exports.onCreateUser = functions.auth.user().onCreate((user) => {
  const userId = user.uid;
  const databaseRef = admin.database().ref(`/users/${userId}`);

  // Initialize user data (example: set an initial "displayName")
  const initialData = {
    displayName: user.displayName || 'User',
    // Add other initial data as needed
  };

  return databaseRef.set(initialData)
    .then(() => {
      console.log(`User data created for user with ID: ${userId}`);
      return null;
    })
    .catch((error) => {
      console.error(`Error creating user data: ${error}`);
      return null;
    });
});
