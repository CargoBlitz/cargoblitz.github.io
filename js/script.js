/*const hamburger = document.querySelector('.hamburger-menu input');
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
});*/
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
/* DARK / LIGHT MODES */
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const toggleIcon = document.querySelector('#toggleIcon');
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem('darkMode', 'enabled');
    toggleIcon.classList.add('fa-sun');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.style.color = 'white';
}
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem('darkMode', null);
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
    toggleIcon.style.color = 'black';
}
if(darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled') {
        enableDarkMode();
    }
    else if(darkMode === 'enabled') {
        disableDarkMode()
    }
})
// Bottom NAV MOBILE
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.bottom-bar-mobile ul li a');
    const removeActiveClasses = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            removeActiveClasses();
            link.classList.add('active');
        });
    });
});