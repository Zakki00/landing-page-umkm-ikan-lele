
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
window.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});