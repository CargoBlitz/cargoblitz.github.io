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
function switchMode() {
    const body = document.body;
    const icon = document.querySelector('.dark-light-mode i');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Set default mode to light mode on page load
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-mode');
});
// Bottom NAV MOBILE
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.bottom-bar-mobile ul li a');

    // Function to remove active class from all links
    const removeActiveClasses = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };

    // Handle click event on navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Remove active class from all links
            removeActiveClasses();

            // Add active class to the clicked link
            link.classList.add('active');
        });
    });
});