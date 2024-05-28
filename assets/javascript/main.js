// Sticky NAVBAR
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("nav_container");
    navbar.classList.toggle("sticky", window.scrollY > 5);
});

// Toggle Menu Button
document.addEventListener('DOMContentLoaded', function () {
    const showBtn = document.getElementById('menu_btn');
    const menu = document.getElementById('toogle_menu');
    const closeBtn = document.getElementById('close_menu');
    const liens = document.querySelectorAll('.toogle_list i')
    showBtn.addEventListener('click', function () {
        menu.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('show');
    });

    liens.forEach(function (lien) {
        lien.addEventListener('click', function () {
            menu.classList.remove('show');
        });
    });
});