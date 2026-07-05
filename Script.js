‎// ===============================
‎// Sunny Ji Ansari Real Estate
‎// script.js
‎// ===============================
‎
‎// Welcome Message
‎window.onload = function () {
‎    alert("Welcome to Sunny Ji Ansari Real Estate");
‎};
‎
‎// View Projects Button
‎const buttons = document.querySelectorAll("button");
‎
‎buttons.forEach(function(btn) {
‎    btn.addEventListener("mouseover", function() {
‎        btn.style.transform = "scale(1.05)";
‎    });
‎
‎    btn.addEventListener("mouseout", function() {
‎        btn.style.transform = "scale(1)";
‎    });
‎});
‎
‎// Smooth Scrolling
‎document.querySelectorAll("a").forEach(function(link) {
‎    link.addEventListener("click", function(e) {
‎        const href = this.getAttribute("href");
‎
‎        if (href.startsWith("#")) {
‎            e.preventDefault();
‎            document.querySelector(href).scrollIntoView({
‎                behavior: "smooth"
‎            });
‎        }
‎    });
‎});
‎
‎// Footer Year
‎const footer = document.querySelector("footer p");
‎
‎if (footer) {
‎    footer.innerHTML =
‎        "© " + new Date().getFullYear() +
‎        " Sunny Ji Ansari | All Rights Reserved";
‎}
‎
‎console.log("Website Loaded Successfully");
