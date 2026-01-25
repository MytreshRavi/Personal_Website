// JavaScript for routing between pages
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        window.location.href = target;
    });
});