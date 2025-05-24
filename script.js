// Popup функции
function showPopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    if (popup) {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('visible');
            popup.setAttribute('aria-hidden', 'false');
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
        popup.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

// Затваряне с Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openPopups = document.querySelectorAll('.popup.visible');
        openPopups.forEach(popup => {
            const popupId = popup.id.replace('-popup', '');
            closePopup(popupId);
        });
    }
});

// Плаващи бутони при скрол
let lastScrollTop = 0;
const floatingButtons = document.getElementById('floatingButtons');

function hideFloatingButtons() {
    if (floatingButtons) {
        floatingButtons.classList.add('hidden');
    }
}

function showFloatingButtons() {
    if (floatingButtons) {
        floatingButtons.classList.remove('hidden');
    }
}

window.addEventListener('scroll', function() {
    if (!floatingButtons) return;

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const scrollThreshold = 50;

    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        hideFloatingButtons();
    } else if (currentScroll < lastScrollTop || currentScroll <= scrollThreshold) {
        showFloatingButtons();
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Показване на плаващи бутони на мобилни устройства след зареждане
document.addEventListener('DOMContentLoaded', function() {
    const floatingButtonsContainer = document.getElementById('floatingButtons');
    if (floatingButtonsContainer && window.getComputedStyle(floatingButtonsContainer).display !== 'none') {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const scrollThreshold = 50;
        if (currentScroll > scrollThreshold) {
            hideFloatingButtons();
        }
    }
});
