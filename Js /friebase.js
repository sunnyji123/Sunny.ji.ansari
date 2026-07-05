‎// Import Firebase
‎import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
‎import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
‎import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
‎
‎// Apni Firebase Configuration yahan paste karni hai
‎const firebaseConfig = {
‎  apiKey: "YOUR_API_KEY",
‎  authDomain: "YOUR_PROJECT.firebaseapp.com",
‎  projectId: "YOUR_PROJECT_ID",
‎  storageBucket: "YOUR_PROJECT.firebasestorage.app",
‎  messagingSenderId: "YOUR_SENDER_ID",
‎  appId: "YOUR_APP_ID"
‎};
‎
‎// Firebase Initialize
‎const app = initializeApp(firebaseConfig);
‎
‎// Services Export
‎export const auth = getAuth(app);
‎export const db = getFirestore(app);
