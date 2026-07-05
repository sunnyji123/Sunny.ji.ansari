‎// js/auth.js
‎
‎import { auth } from "./firebase.js";
‎import {
‎  signInWithEmailAndPassword
‎} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
‎
‎const loginBtn = document.getElementById("loginBtn");
‎const message = document.getElementById("message");
‎
‎loginBtn.addEventListener("click", async () => {
‎
‎  const email = document.getElementById("email").value.trim();
‎  const password = document.getElementById("password").value;
‎
‎  if (!email || !password) {
‎    message.innerHTML = "Please enter email and password.";
‎    return;
‎  }
‎
‎  try {
‎    await signInWithEmailAndPassword(auth, email, password);
‎
‎    message.style.color = "green";
‎    message.innerHTML = "Login Successful...";
‎
‎    // Dashboard Page
‎    window.location.href = "dashboard.html";
‎
‎  } catch (error) {
‎    message.style.color = "red";
‎    message.innerHTML = error.message;
‎  }
‎
‎
