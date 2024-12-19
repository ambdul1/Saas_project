document.addEventListener('DOMContentLoaded', () => {
    // Ajout du menu hamburger
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    document.querySelector('header nav').prepend(menuToggle);
  
    const nav = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    // GSAP animations
    gsap.from('.intro-content h1', { duration: 1, y: -50, opacity: 0 });
    gsap.from('.intro-content p', { duration: 1, delay: 0.5, y: 50, opacity: 0 });
    gsap.from('nav ul li', { duration: 1, opacity: 0, stagger: 0.3 });
  
    // AOS initialization
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  