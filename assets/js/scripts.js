
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const siteBody = document.querySelector('body');
    const navItem = document.querySelector('.nav-item');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');    
            
    
    navLinks.forEach((navItem, index) => {
        if (navItem.style.animation) {
            navItem.style.animation = '';
            burger.setAttribute("aria-expanded", "false");
        } else {
            navItem.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
            burger.setAttribute("aria-expanded", "true");
            
        }
    });
        siteBody.classList.toggle('lock-scroll');
        burger.classList.toggle('toggle');
    });
    

    }


navSlide();


var navi = document.querySelector('.nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.innerWidth > 768) {
        if (window.scrollY >= 100) { // Just an example
            navi.style.backgroundColor = 'rgba(62,10,18, 0.92)'; // or default color
            nav.style.backgroundColor = "rgba(62,10,18, 0.92)";
            navi.style.height = "60px"
        } else {
            navi.style.backgroundColor = 'transparent';
            navi.style.height = "150px"
        }
    }

    
});

