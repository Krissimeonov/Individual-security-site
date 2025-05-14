
let lastScrollTop = 0;
const buttons = document.querySelector('.contact-buttons');

window.addEventListener('scroll', function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        buttons.style.opacity = '0';
    } else {
        buttons.style.opacity = '1';
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

document.querySelectorAll('.partner-logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.getElementById('modal-title').innerText = logo.dataset.title;
        document.getElementById('modal-description').innerText = logo.dataset.description;
        document.getElementById('modal').classList.remove('hidden');
    });
});
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});
