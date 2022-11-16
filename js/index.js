const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scroll", this.window.scrollY > 0);
})

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menuLink.classList.remove("aria-label", "Abrir menú");
    })
})