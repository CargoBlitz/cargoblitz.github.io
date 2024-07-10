// SCROLL TO TOP
/*document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});*/
/* DARK / LIGHT MODES */
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeToggleDesktop = document.querySelector('#dark-mode-toggle-desktop');
const toggleIcon = document.querySelector('#toggleIcon');
const toggleIconDesktop = document.querySelector('#toggleIconDesktop');
const arrows = document.querySelectorAll('.arrow')
const enableDarkMode = () => {
    arrows.forEach(arrow => {
        arrow.style.filter = "";
    });
    document.body.classList.add("darkmode");
    localStorage.setItem('darkMode', 'enabled');
    toggleIcon.classList.add('fa-sun');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.style.color = 'white';
    toggleIconDesktop.classList.add('fa-sun');
    toggleIconDesktop.classList.remove('fa-moon');
    toggleIconDesktop.style.color = 'white';
}
const disableDarkMode = () => {
    arrows.forEach(arrow => {
        arrow.style.filter = "invert(100%)";
    });
    document.body.classList.remove("darkmode");
    localStorage.setItem('darkMode', null);
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
    toggleIcon.style.color = 'black';
    toggleIconDesktop.classList.remove('fa-sun');
    toggleIconDesktop.classList.add('fa-moon');
    toggleIconDesktop.style.color = 'black';
}
if(darkMode === 'enabled') {
    enableDarkMode();
}
if(darkMode === 'enabled') {
    arrows.forEach(arrow => {
        arrow.style.filter = "";
    });
} else {
    arrows.forEach(arrow => {
        arrow.style.filter = "invert(100%)";
    });
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
darkModeToggleDesktop.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled') {
        enableDarkMode();
    }
    else if(darkMode === 'enabled') {
        disableDarkMode()
    }
})
// Bottom NAV MOBILE
let pcScroll = false;

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.bottom-bar-mobile ul li a');

    const removeActiveClasses = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };

    const activateLink = (link) => {
        removeActiveClasses();
        link.classList.add('active');
    };

    const findVisibleSection = () => {
        let visibleSectionId = null;
        let minDistance = window.innerHeight;

        document.querySelectorAll('.section').forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top >= 0 && rect.top <= window.innerHeight * 0.3) {
                const distance = Math.abs(rect.top);
                if (distance < minDistance) {
                    minDistance = distance;
                    visibleSectionId = section.getAttribute('id');
                }
            }
        });

        return visibleSectionId;
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.textContent.trim().toLowerCase();
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                pcScroll = true;
                targetElement.scrollIntoView({ behavior: 'smooth' });
                activateLink(link);
                setTimeout(() => {
                    pcScroll = false;
                }, 3500);
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (!pcScroll) {
            const visibleSectionId = findVisibleSection();

            if (visibleSectionId) {
                navLinks.forEach(link => {
                    if (link.textContent.trim().toLowerCase() === visibleSectionId) {
                        activateLink(link);
                    }
                });
            }
        }
    });

    const updateActiveSection = () => {
        const fromTop = window.scrollY + (window.innerHeight * 0.3);

        document.querySelectorAll('.section').forEach(section => {
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.bottom-bar-mobile ul li a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    activateLink(correspondingLink);
                }
            }
        });
    };
    updateActiveSection();
    window.addEventListener('popstate', updateActiveSection);
    window.addEventListener('load', updateActiveSection);
    const visibleSectionId = findVisibleSection();
    if (visibleSectionId) {
        navLinks.forEach(link => {
            if (link.textContent.trim().toLowerCase() === visibleSectionId) {
                activateLink(link);
            }
        });
    }
});
//DIALOG
const buttons = document.querySelectorAll('.cta');
let openDialog = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (openDialog) {
            return;
        }
        
        const dialog = this.closest('.experience-item').querySelector('.dialog');
        dialog.style.display = 'flex';
        openDialog = dialog;
        document.body.style.overflow = 'hidden';
    });
});

const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const dialog = this.closest('.dialog');
        dialog.style.display = 'none';
        document.body.style.overflow = '';
        openDialog = null;
    });
});
// GET TIME
function getBelgiumTimeZone() {
    const now = new Date();
    const standardOffset = 60;
    const summerOffset = 120;
    const currentOffset = now.getTimezoneOffset();
    if (currentOffset === -standardOffset) {
      return "Central European Time (CET) - UTC+1";
    } else if (currentOffset === -summerOffset) {
      return "Central European Summer Time (CEST) - UTC+2";
    } else {
      return "Unknown Time Zone";
    }
};
const textTime = getBelgiumTimeZone();
const textTimeEl = document.getElementById('timezone');
textTimeEl.textContent = textTime;
//PORTFOLIO SECTION FUNCTIONALITY
const project1 = document.getElementById('project1');
project1.addEventListener('click', () => {
    window.location.href = 'https://rolex-server-git-main-maurodesmets-projects.vercel.app/index.html';
})
// ABOUT SECTION FUNCTIONALITY
const aboutButtons = document.querySelectorAll('.contactmebtn');
aboutButtons.forEach(aboutbtn => {
    aboutbtn.addEventListener('click', function() {
        const dialog = this.closest('.dialog');
        dialog.style.display = 'none';
        document.body.style.overflow = '';
        openDialog = null;
        var contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    })
})
//CONTACT SECTION FUNCTIONALITY
const discordOpen = document.getElementById('discord');
discordOpen.addEventListener('click', function() {
    window.location.href = 'https://discord.com/invite/xPpfPDBH';
})
function sendEmail() {
    var emailAddress = "mauro@devteamit.com";
    var mailtoLink = "mailto:" + emailAddress;
    window.location.href = mailtoLink;
}