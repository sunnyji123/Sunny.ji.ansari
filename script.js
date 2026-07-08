document.addEventListener("DOMContentLoaded", () => {
    // 1. Aapka Projects Data (Yahan aap apni real images ke links daal sakte hain)
    const inventoryData = [
        {
            id: 1,
            title: "120 Sq Yards Residential Plot",
            location: "Dhabeji Market | Al Sadat Town",
            category: "RESIDENTIAL",
            status: "Available",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&auto=format&fit=crop", // Plot ki sample photo
            link: "contact.html"
        },
        {
            id: 2,
            title: "Booking File Submission Form",
            location: "Main Office Counter",
            category: "RESIDENTIAL",
            status: "Open",
            image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=400&auto=format&fit=crop", // Document ki sample photo
            link: "upload.html"
        }
    ];

    const inventoryContainer = document.getElementById("inventoryContainer");
    const searchInput = document.getElementById("searchInput");

    // 2. Data ko Screen par Pictures ke saath render karne ka function
    function displayInventory(data) {
        if (!inventoryContainer) return;
        
        inventoryContainer.innerHTML = "";

        if (data.length === 0) {
            inventoryContainer.innerHTML = `<p style="color: #cbd5e1; text-align: center;">No properties found.</p>`;
            return;
        }

        data.forEach(item => {
            const card = document.createElement("div");
            card.style.cssText = "background: #1e293b; border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 12px; padding: 20px; margin-bottom: 20px; display: flex; gap: 20px; align-items: center; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.3);";

            // Status button ka rang (Available ke liye Gold/Green, Open ke liye dynamic)
            const statusColor = item.status === "Available" ? "#d4af37" : "#cbd5e1";

            card.innerHTML = `
                <!-- Property Image -->
                <img src="${item.image}" alt="${item.title}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(212, 175, 55, 0.3);">
                
                <!-- Property Details -->
                <div style="flex: 1;">
                    <h3 style="color: #ffffff; margin: 0 0 8px 0; font-size: 1.2rem;">${item.title}</h3>
                    <p style="color: #cbd5e1; margin: 0 0 5px 0; font-size: 0.95rem;">📍 ${item.location}</p>
                    <p style="color: #94a3b8; margin: 0; font-size: 0.85rem;">Category: ${item.category}</p>
                </div>

                <!-- Action Button -->
                <a href="${item.link}" style="background: rgba(212, 175, 55, 0.15); border: 1px solid ${statusColor}; color: ${statusColor}; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.9rem; transition: all 0.3s;">
                    ${item.status}
                </a>
            `;
            inventoryContainer.appendChild(card);
        });
    }

    // Initial Display
    displayInventory(inventoryData);

    // 3. Search Bar Filtering Logic
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = inventoryData.filter(item => 
                item.title.toLowerCase().includes(term) || 
                item.location.toLowerCase().includes(term) || 
                item.category.toLowerCase().includes(term) ||
                item.status.toLowerCase().includes(term)
            );
            displayInventory(filtered);
        });
    }

    // 4. URL Filter Check (Jo index.html ke 'Buy/Sell/Invest' se aayega)
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        if (searchInput) searchInput.value = filterParam;
        const filtered = inventoryData.filter(item => 
            item.category.toLowerCase().includes(filterParam.toLowerCase()) ||
            item.status.toLowerCase().includes(filterParam.toLowerCase()) ||
            item.title.toLowerCase().includes(filterParam.toLowerCase())
        );
        displayInventory(filtered);
    }
});
