// Function to show a specific popup by its ID
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

// Function to close a specific popup by its ID
function closePopup(popupId) {
    const popup = document.getElementById(popupId + '-popup');
    if (popup) {
        popup.classList.remove('visible');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

// Optional: Close popup when pressing the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openPopups = document.querySelectorAll('.popup.visible');
        openPopups.forEach(popup => {
            const popupId = popup.id.replace('-popup', '');
            closePopup(popupId);
        });
    }
});

// Скриване и показване на плаващите бутони при скрол
let lastScrollTop = 0;
const floatingButtons = document.getElementById('floatingButtons'); // Увери се, че елементът ти има id="floatingButtons"

// Функия, която скрива бутоните
function hideFloatingButtons() {
    if (floatingButtons) {
        floatingButtons.classList.add('hidden');
    }
}

// Функия, която показва бутоните
function showFloatingButtons() {
     if (floatingButtons) {
        floatingButtons.classList.remove('hidden');
     }
}


window.addEventListener('scroll', function() {
  // Проверяваме дали елементът съществува, преди да работим с него
  if (!floatingButtons) return;

  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Праг на скрол - бутоните се скриват/показват само ако скролът е поне 50px
  // Това предотвратява премигване при малки движения на скрола в горната част
  const scrollThreshold = 50;

  if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
    // Скрива бутоните при скрол надолу (ако сме изминали прага)
    hideFloatingButtons();
  } else if (currentScroll < lastScrollTop || currentScroll <= scrollThreshold) {
    // Показва бутоните при скрол нагоре, или ако сме в началото на страницата (под прага)
     showFloatingButtons();
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ОПЦИОНАЛНО: Скрий бутоните при първоначално зареждане, ако страницата не е в началото
// (Само ако плаващите бутони са видими по подразбиране на мобилни)
// Изпълнява се след като DOM дървото е готово
document.addEventListener('DOMContentLoaded', function() {
    const floatingButtonsContainer = document.getElementById('floatingButtons');
     // Проверяваме дали елементът съществува и дали е видим според медия заявката
    if (floatingButtonsContainer && window.getComputedStyle(floatingButtonsContainer).display !== 'none') {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const scrollThreshold = 50; // Същият праг като при скрола

        if (currentScroll > scrollThreshold) {
            // Ако страницата не е в началото при зареждане на мобилни, скрий бутоните първоначално
            hideFloatingButtons();
        }
    }
});
