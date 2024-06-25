window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Cambia el valor según cuándo quieras que ocurra el cambio
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});