var hamburgerHome = document.querySelector('.hamburger');
var navListHome = document.querySelector('.nav-list');
if (hamburgerHome && navListHome) {
    hamburgerHome.addEventListener('click', function () {
        // Toggle active class for both the hamburger icon and the nav menu
        hamburgerHome.classList.toggle('active');
        navListHome.classList.toggle('active');
        // Toggle aria-expanded for accessibility
        var isExpanded = hamburgerHome.getAttribute('aria-expanded') === 'true';
        hamburgerHome.setAttribute('aria-expanded', (!isExpanded).toString());
    });
}
