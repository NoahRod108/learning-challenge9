// navbar
const navbar = document.querySelector(".navbar");
const toggleNav = document.querySelector(".mobile-menu-toggle");

toggleNav.addEventListener('click', () => {
    const visible = navbar.getAttribute("data-visible");
    toggleNav.setAttribute("aria-expanded", "false")

    navbar.setAttribute("data-visible", "false");

    if(visible === "false"){
        navbar.setAttribute("data-visible", "true");
        toggleNav.setAttribute("aria-expanded", "true");
    }
})