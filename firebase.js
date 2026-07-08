<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJ Real Estate Portal - Image Upload</title>
</head>
<body style="background-color: #000; color: #fff; font-family: Arial, sans-serif; padding: 20px;">

    <!-- 1. UPLOAD SECTION (Yahan se aap rozana nayi picture select karke upload karenge) -->
    <div class="upload-section" style="padding: 20px; background: #111; border: 2px solid #d4af37; border-radius: 8px; margin-bottom: 30px; max-width: 500px;">
        <h3 style="color: #d4af37; margin-top: 0; font-size: 20px;">Nayi Picture Upload Karen</h3>
        <p style="color: #ccc; font-size: 14px; margin-bottom: 15px;">Yahan se jo bhi photo upload karenge, woh automatic website par sabse upar dikhegi.</p>
        
        <input type="file" id="imageInput" accept="image/*" style="color: #fff; margin-bottom: 15px; display: block;" />
        
        <button id="uploadBtn" style="background: #d4af37; color: #000; border: none; padding: 10px 20px; cursor: pointer; font-weight: bold; border-radius: 4px; font-size: 16px;">
            Upload Picture
        </button>
        
        <p id="status" style="color: #00ff00; margin-top: 10px; font-size: 14px; font-weight: bold;"></p>
    </div>

    <!-- 2. GALLERY SECTION (Yahan aapki saari purani aur nayi pictures line se nazar aayengi) -->
    <h2 style="color: #d4af37; border-bottom: 1px solid #333; padding-bottom: 10px;">Hamara Kam (Image Gallery)</h2>
    <div id="galleryContainer" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; padding: 10px 0;">
        <!-- Firebase se pictures automatic yahan load hongi -->
    </div>

    <!-- 3. FIREBASE AUR UPLOAD LOGIC (Aapka bheja hua code aur naya code ek sath) -->
    <script type="module">
        // Firebase ke zaroori functions ko import karna
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
        import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
        import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

        // AAPKA BHEJA HUA FIREBASE CONFIGURATION CODE
        const firebaseConfig = {
            apiKey: "AIzaSyADC693uEi9PKJqiTcyyZ8eJHa9b26xp1I",
            authDomain: "sunnyji123-f3c0d.firebaseapp.com",
            projectId: "sunnyji123-f3c0d",
            storageBucket: "sunnyji123-f3c0d.firebasestorage.app",
            messagingSenderId: "719753127340",
            appId: "1:719753127340:web:29978e55e80ec4b5858609",
            measurementId: "G-48099EJ7MB"
        };

        // Firebase ko shuru (initialize) karna
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        // Storage aur Database ko active karna
        const storage = getStorage(app);
        const db = getFirestore(app);

        // HTML elements ko JavaScript mein connect karna
        const imageInput = document.getElementById('imageInput');
        const uploadBtn = document.getElementById('uploadBtn');
        const status = document.getElementById('status');
        const galleryContainer = document.getElementById('galleryContainer');

        // --- PICTURE UPLOAD KARNE KA KAAM ---
        uploadBtn.addEventListener('click', async () => {
            const file = imageInput.files[0];
            if (!file) {
                alert("Baraye meharbani pehle koi picture select karein!");
                return;
            }

            status.style.color = "#d4af37";
            status.innerText = "Upload ho rahi hai... please wait...";
            uploadBtn.disabled = true;

            try {
                // Har photo ka ek unique naam rakhna taaki purani delete na ho
                const uniqueName = Date.now() + "_" + file.name;
                const storageRef = ref(storage, 'gallery/' + uniqueName);
                
                // File ko Firebase Storage mein bhejna
                await uploadBytes(storageRef, file);
                
                // Upload ki hui file ka link nikalna
                const downloadURL = await getDownloadURL(storageRef);

                // Database (Firestore) mein link aur upload ka time save karna
                await addDoc(collection(db, "site_gallery"), {
                    imageUrl: downloadURL,
                    createdAt: Date.now()
                });

                status.style.color = "#00ff00";
                status.innerText = "Picture kamyabi se upload ho gayi aur gallery mein jud gayi!";
                imageInput.value = ""; // Input saaf karne ke liye
            } catch (error) {
                console.error("Error: ", error);
                status.style.color = "#ff0000";
                status.innerText = "Upload nakam hui. Meharbani karke Firebase Console mein Rules check karein.";
            } finally {
                uploadBtn.disabled = false;
            }
        });

        // --- SAARI PICTURES LIVE DIKHANE KA KAAM (Purani + Nayi) ---
        // Yeh query saari pictures ko naye se purane ke hisab se order karegi
        const q = query(collection(db, "site_gallery"), orderBy("createdAt", "desc"));
        
        // Jaise hi database mein badlaav hoga, yeh automatic bina page refresh kiye screen par dikha dega
        onSnapshot(q, (snapshot) => {
            galleryContainer.innerHTML = ""; // Pehle purani list clear karna
            
            snapshot.forEach((doc) => {
                const data = doc.data();
                
                // Har picture ke liye ek card banana
                const imgCard = document.createElement('div');
                imgCard.style.border = "1px solid #333";
                imgCard.style.borderRadius = "8px";
                imgCard.style.overflow = "hidden";
                imgCard.style.background = "#111";
                imgCard.style.boxShadow = "0 4px 8px rgba(0,0,0,0.5)";

                imgCard.innerHTML = `
                    <img src="${data.imageUrl}" alt="Real Estate Project" style="width: 100%; height: 200px; object-fit: cover; display: block;" />
                `;
                
                galleryContainer.appendChild(imgCard);
            });
        });
    </script>
</body>
</html>
