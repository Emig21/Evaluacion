// script.js
document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');
    var nav = document.getElementById('nav');

    header.addEventListener('mouseenter', function() {
        nav.style.top = '0';
    });

    header.addEventListener('mouseleave', function() {
        nav.style.top = '-60px'; // Ajusta esta altura según la altura de tu nav
    });
});
