const hamburger = document.querySelector('.hamburger-menu input');
const sidebar = document.querySelector('.sidebar');
const liElements = document.querySelectorAll('.li-mobile');

hamburger.addEventListener('change', () => {
    if (hamburger.checked) {
        liElements.forEach(li => {
            li.style.display = "block";
            li.style.animation = 'fadeIn 0.2s';
          });
        sidebar.classList.add('open');
        sidebar.style.display = 'flex';
        sidebar.style.animation = 'show 0.3s forwards';
    } else {
        sidebar.style.animation = 'hide 0.3s forwards';
        liElements.forEach(li => {
            li.style.animation = 'fadeOut 0.2s';
            setTimeout(() => {
                li.style.display = "none";
              }, 150)
          });
        setTimeout(() => {
            sidebar.style.display = 'none';
            sidebar.classList.remove('open');
        }, 300);
    }
});