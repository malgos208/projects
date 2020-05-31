ScrollOut({
            once: true
        });

        const hamburger = document.querySelector('.c-hamburger');
        const nav = document.querySelector('.c-nav');
        const navItems = document.querySelectorAll('.c-nav__item');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('c-hamburger--is-active');
            nav.classList.toggle('c-nav--is-active');
        });

        nav.addEventListener('click', () => {
            hamburger.classList.toggle('c-hamburger--is-active');
            nav.classList.toggle('c-nav--is-active');
        });