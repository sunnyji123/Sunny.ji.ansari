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
});// === HARD-CODED FILE UPLOAD PREVIEW LOGIC ===
document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const previewContainer = document.getElementById("previewContainer");
    const noFilesText = document.getElementById("noFilesText");

    if (fileInput && previewContainer) {
        fileInput.addEventListener("change", function(event) {
            const files = event.target.files;
            
            // Agar koi file select hui hai to "No files uploaded yet" waala text hata do
            if (files.length > 0 && noFilesText) {
                noFilesText.style.display = 'none';
            }

            Array.from(files).forEach(file => {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const fileCard = document.createElement("div");
                    fileCard.style.cssText = "border: 1px solid #d4af37; padding: 10px; border-radius: 5px; background: #1e293b; color: #fff; text-align: center; width: 150px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);";

                    // Agar image hai toh image card banao
                    if (file.type.startsWith("image/")) {
                        const img = document.createElement("img");
                        img.src = e.target.result;
                        img.style.cssText = "width: 130px; height: 130px; object-fit: cover; display: block; margin: 0 auto 8px; border-radius: 4px;";
                        fileCard.appendChild(img);
                    } else {
                        // Agar koi doc ya pdf hai toh icon dikhao
                        const docIcon = document.createElement("div");
                        docIcon.innerText = "📄";
                        docIcon.style.cssText = "font-size: 50px; margin-bottom: 8px;";
                        fileCard.appendChild(docIcon);
                    }

                    // File ka naam short karke dikhane ke liye
                    const fileName = document.createElement("p");
                    fileName.innerText = file.name;
                    fileName.style.cssText = "font-size: 12px; max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0; color: #cbd5e1;";
                    
                    fileCard.appendChild(fileName);
                    previewContainer.appendChild(fileCard);
                };

                // File data read karne ke liye taaki Vercel server par issue na aaye
                reader.readAsDataURL(file);
            });
        });
    }
});
