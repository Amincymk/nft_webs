
    const menu = document.querySelector('.nav-bars');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
