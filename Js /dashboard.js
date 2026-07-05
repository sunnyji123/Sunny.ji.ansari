‎// ===============================
‎// Sunny Ji Ansari Dashboard
‎// js/dashboard.js
‎// ===============================
‎
‎// Demo Dashboard Data
‎let totalPlots = 20;
‎let availablePlots = 15;
‎let soldPlots = 5;
‎let inquiries = 12;
‎
‎// Dashboard Numbers
‎document.getElementById("totalPlots").innerText = totalPlots;
‎document.getElementById("availablePlots").innerText = availablePlots;
‎document.getElementById("soldPlots").innerText = soldPlots;
‎document.getElementById("inquiries").innerText = inquiries;
‎
‎// Logout Button
‎const logoutBtn = document.getElementById("logoutBtn");
‎const logoutLink = document.getElementById("logoutLink");
‎
‎function logout() {
‎    alert("Logout Successful");
‎    window.location.href = "login.html";
‎}
‎
‎if (logoutBtn) {
‎    logoutBtn.addEventListener("click", logout);
‎}
‎
‎if (logoutLink) {
‎    logoutLink.addEventListener("click", function(e) {
‎        e.preventDefault();
‎        logout();
‎    });
‎}
‎
‎// Welcome Message
‎console.log("Welcome to Sunny Ji Ansari Admin Dashboard");
