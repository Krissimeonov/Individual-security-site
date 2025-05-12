function showPopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    if (popup) {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('visible');
        }, 50);

        popup.addEventListener('click', function(event) {
            if (event.target === popup) {
                closePopup(popupId);
            }
        });
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    if (popup) {
        popup.classList.remove('visible');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openPopups = document.querySelectorAll('.popup.visible');
        openPopups.forEach(popup => {
            const popupId = popup.id.replace('-popup', '');
            closePopup(popupId);
        });
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
