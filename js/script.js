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

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.bottom-bar-mobile li');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.textContent.trim().toLowerCase();
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.bottom-bar-mobile ul li a');
    const removeActiveClasses = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };
    const findVisibleSection = () => {
        let visibleSectionId = null;

        document.querySelectorAll('.section').forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
                visibleSectionId = section.getAttribute('id');
            }
        });

        return visibleSectionId;
    };
    window.addEventListener('scroll', () => {
        const visibleSectionId = findVisibleSection();

        if (visibleSectionId) {
            removeActiveClasses();
            navLinks.forEach(link => {
                if (link.textContent.trim().toLowerCase() === visibleSectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.textContent.trim().toLowerCase();
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                removeActiveClasses();
                link.classList.add('active');
            }
        });
    });
    navLinks[0].classList.add('active');
});