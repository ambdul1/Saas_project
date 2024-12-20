document.addEventListener('DOMContentLoaded', () => {
    // Récupérer le menu hamburger et la liste de navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    // Ajouter un écouteur d'événements pour afficher ou cacher le menu
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Animations GSAP
    gsap.from('.intro-content h1', { duration: 1, y: -50, opacity: 0 });
    gsap.from('.intro-content p', { duration: 1, delay: 0.5, y: 50, opacity: 0 });
    gsap.from('nav ul li', { duration: 1, opacity: 0, stagger: 0.3 });

    // Initialisation d'AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
});
