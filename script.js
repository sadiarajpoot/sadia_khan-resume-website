var hamburgerHome = document.querySelector('.hamburger');
var navListHome = document.querySelector('.nav-list');
if (hamburgerHome && navListHome) {
    hamburgerHome.addEventListener('click', function () {
       
        hamburgerHome.classList.toggle('active');
        navListHome.classList.toggle('active');
        
        var isExpanded = hamburgerHome.getAttribute('aria-expanded') === 'true';
        hamburgerHome.setAttribute('aria-expanded', (!isExpanded).toString());
    });
}
