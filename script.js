// Script for Ealaín Gallery
gsap.registerPlugin(ScrollTrigger);

// Hides navbar on scroll down, show on scroll up
let lastScrollY = window.scrollY;

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const currentScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    // If the user scrolled down and is past 80px, hide the navbar
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        navbar.classList.add('nav-hidden');
    } else if (currentScrollY < lastScrollY) {
        navbar.classList.remove('nav-hidden');
    }

    // Update lastScrollY to the current scroll position for the next scroll event
    lastScrollY = currentScrollY;
});

// Era titles slide in
gsap.utils.toArray('.era-title').forEach(title => {
    gsap.from(title, {
    opacity: 0, x: -40,
    duration: 0.8,
    scrollTrigger: { trigger: title, start: 'top 80%' }
    });
});

// Pieces fade + slide in alternately
gsap.utils.toArray('.piece').forEach((piece, i) => {
    const fromX = i % 2 === 0 ? -60 : 60;
    gsap.from(piece, {
    opacity: 0, x: fromX,
    duration: 0.9,
    ease: 'power2.out',
    scrollTrigger: { trigger: piece, start: 'top 80%' }
    });
});
