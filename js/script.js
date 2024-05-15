const hamburger = document.querySelector('.hamburger-menu input');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('change', () => {
    if (hamburger.checked) {
        sidebar.classList.add('open');
        sidebar.style.display = 'flex';
        sidebar.style.animation = 'show 0.3s forwards';
    } else {
        sidebar.style.animation = 'hide 0.3s forwards';
        setTimeout(() => {
            sidebar.style.display = 'none';
            sidebar.classList.remove('open');
        }, 300);
    }
});
/* SCROLL ANIMATIONS */
const items = document.querySelectorAll('.scroll-item')

window.addEventListener('scroll', checkItems)

function checkItems() {
    const triggerBottom = window.innerHeight / 5 * 4;
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < triggerBottom) {
            item.classList.add('show');
        }
        else {
            item.classList.remove('show');
        }
    });
}