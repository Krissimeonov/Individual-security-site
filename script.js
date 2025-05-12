// Function to show a specific popup by its ID
function showPopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    if (popup) {
        popup.style.display = 'block';
        // Optional: Add event listener to close when clicking outside the popup content
        popup.addEventListener('click', function(event) {
            if (event.target === popup) {
                closePopup(popupId);
            }
        });
    }
}

// Function to close a specific popup by its ID
function closePopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Optional: Close popup when pressing the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openPopups = document.querySelectorAll('.popup');
        openPopups.forEach(popup => {
            if (popup.style.display === 'block') {
                // Find the ID of the open popup (e.g., 'dahua-popup' -> 'dahua')
                const popupId = popup.id.replace('-popup', '');
                closePopup(popupId);
            }
        });
    }
});

// Note: The HTML uses inline onclick attributes (e.g., onclick="showPopup('dahua')").
// This script provides the functions that those onclick attributes call.
// For larger projects, it's better practice to remove inline onclick and
// use addEventListener in the script.js file instead.
// JavaScript will be added later
