// Function to show a specific popup by its ID
function showPopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    if (popup) {
        popup.style.display = 'block';
        // Optional: Add event listener to close when clicking outside the popup content
        // This listener is added each time the popup is shown, which is okay for this example
        // but in larger apps, you might manage listeners differently.
        popup.addEventListener('click', function(event) {
            // Check if the click was directly on the background (the popup div itself), not its content
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
    // Скриване и показване на плаващите бутони при скрол
let lastScrollTop = 0;
const floatingButtons = document.getElementById('floatingButtons');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Скрива бутоните при скрол надолу
    floatingButtons.style.transform = 'translateY(100px)';
    floatingButtons.style.opacity = '0';
  } else {
    // Показва бутоните при скрол нагоре
    floatingButtons.style.transform = 'translateY(0)';
    floatingButtons.style.opacity = '1';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

});

// Note: The HTML uses inline onclick attributes (e.g., onclick="showPopup('dahua')").
// This script provides the functions that those onclick attributes call.
// For larger projects, it's better practice to remove inline onclick and
// use addEventListener in the script.js file instead.
