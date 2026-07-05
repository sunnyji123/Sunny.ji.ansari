‎// Firebase App aur Database SDKs import karein (Version 10.8.0 ya 10.x use karein jo stable chalte hain)
‎import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
‎import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
‎
‎// Aapki Real Config jisme Database URL add kar diya hai
‎const firebaseConfig = {
‎  apiKey: "AIzaSyBa2kPOsJf8O4LMC2nYyOu8flslvbyGj4s",
‎  authDomain: "sunny-ji-ansari-real-estate.firebaseapp.com",
‎  databaseURL: "https://sunny-ji-ansari-real-estate-default-rtdb.firebaseio.com", // Aapka Realtime Database URL
‎  projectId: "sunny-ji-ansari-real-estate",
‎  storageBucket: "sunny-ji-ansari-real-estate.firebasestorage.app",
‎  messagingSenderId: "863373716389",
‎  appId: "1:863373716389:web:923f744b8b12dc736a564c"
‎};
‎
‎// Firebase initialize karein
‎const app = initializeApp(firebaseConfig);
‎const database = getDatabase(app);
‎
‎// In sab ko export kar rahe hain taaki dashboard aur baki files me use ho sakein
‎export { database, ref, set, push, get, child };
