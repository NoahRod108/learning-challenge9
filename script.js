// navbar
const navbar = document.querySelector(".navbar");
const toggleNav = document.querySelector(".mobile-menu-toggle");
const overlay = document.querySelector(".overlay");

toggleNav.addEventListener('click', () => {
    const visible = navbar.getAttribute("data-visible");
    toggleNav.setAttribute("aria-expanded", "false")

    navbar.setAttribute("data-visible", "false");
    overlay.setAttribute("data-visible", "false");

    if(visible === "false"){
        navbar.setAttribute("data-visible", "true");
        overlay.setAttribute("data-visible", "true");
        toggleNav.setAttribute("aria-expanded", "true");
    }
})