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
const sections = document.querySelectorAll('.section');

function checkVisibility() {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = sectionTop + section.clientHeight;

        if (sectionTop < windowHeight && sectionBottom >= 0) {
            section.classList.add('animate-scroll');
        } else {
            section.classList.remove('animate-scroll');
        }
    });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
checkVisibility();