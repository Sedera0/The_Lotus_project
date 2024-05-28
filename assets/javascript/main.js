// Sticky NAVBAR
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("nav_container");
    navbar.classList.toggle("sticky", window.scrollY > 5);
});