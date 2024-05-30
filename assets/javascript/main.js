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

//Slider Hero
document.addEventListener('DOMContentLoaded', function(){
    const preview = document.querySelector('.fa-chevron-left');
    const next = document.querySelector('.fa-chevron-right');
    const slideContainer = document.getElementById('slide_container');
    const illustration = document.querySelectorAll('.illustration');
    let currentIndex = 0;

    function animation(){
        const sliding = -currentIndex * 100;
        slideContainer.style.transform = `translateX(${sliding}%)`;
    }

    preview.addEventListener('click', function(){
        if(currentIndex > 0) {
            currentIndex--;
            animation();
        }
    })

    next.addEventListener('click', function(){
        if(currentIndex < illustration.length - 1) {
            currentIndex++;
            animation();
        }
    })

    
})