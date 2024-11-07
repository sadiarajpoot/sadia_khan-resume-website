var Hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.nav-list');
if (Hamburger && nav) {
    Hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
}
