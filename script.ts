const Hamburger = document.querySelector<HTMLButtonElement>('.hamburger');
const nav = document.querySelector<HTMLUListElement>('.nav-list');

if (Hamburger && nav) {
    Hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
