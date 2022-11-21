const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navMenuItem = document.querySelector(".nav-menu");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

navMenuItem.addEventListener("click", cerrarMenu)

function cerrarMenu() {
    navMenu.classList.remove("nav-menu_visible",);
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scroll", this.window.scrollY > 0);
})
