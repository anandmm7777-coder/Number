// ===============================
// Firebase Configuration
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyBFL7Qsh0s4k-5UK0dQc8jHgzIh7HSqPLU",
  authDomain: "fir-39286.firebaseapp.com",
  projectId: "fir-39286",
  storageBucket: "fir-39286.firebasestorage.app",
  messagingSenderId: "412102812344",
  appId: "1:412102812344:web:c6cf773b826ee3ea304a4d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication
const auth = firebase.auth();

// Google Provider
const provider = new firebase.auth.GoogleAuthProvider();

// Language
auth.useDeviceLanguage();