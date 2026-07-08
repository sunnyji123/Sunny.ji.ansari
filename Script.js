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
‎console.log("Website Loaded Successfully");       document.addEventListener("DOMContentLoaded", () => {
    // Maan lete hain aapke HTML mein ek input hai jiska id 'fileInput' hai
    // Aur ek div hai jiska id 'previewContainer' hai
    const fileInput = document.getElementById("fileInput");
    const previewContainer = document.getElementById("previewContainer");

    if (fileInput && previewContainer) {
        fileInput.addEventListener("change", function(event) {
            const files = event.target.files;
            
            // Purani dikhne waali files ko clear na karna ho to ise hata sakte hain
            previewContainer.innerHTML = ''; 

            Array.from(files).forEach(file => {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const fileCard = document.createElement("div");
                    fileCard.style.cssText = "border: 1px solid #d4af37; padding: 10px; margin: 10px; border-radius: 5px; display: inline-block; background: #111; color: #fff; text-align: center;";

                    // Agar image hai to image dikhao, nahi to icon
                    if (file.type.startsWith("image/")) {
                        const img = document.createElement("img");
                        img.src = e.target.result;
                        img.style.cssText = "width: 150px; height: 150px; object-fit: cover; display: block; margin-bottom: 5px;";
                        fileCard.appendChild(img);
                    } else {
                        const docIcon = document.createElement("div");
                        docIcon.innerText = "📄";
                        docIcon.style.fontSize = "50px";
                        fileCard.appendChild(docIcon);
                    }

                    const fileName = document.createElement("p");
                    fileName.innerText = file.name;
                    fileName.style.cssText = "font-size: 12px; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0;";
                    
                    fileCard.appendChild(fileName);
                    previewContainer.appendChild(fileCard);
                };

                // File ko read karo taaki locally show ho sake (Vercel par bhi chalega)
                reader.readAsDataURL(file);
            });
        });
    }
});
