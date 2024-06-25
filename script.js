window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var navbarToggle = document.querySelector('.navbar-toggler');

    if (window.scrollY > 50 ) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
