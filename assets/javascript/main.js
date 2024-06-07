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
    const liens = document.querySelectorAll('.nav_link');

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
    });

    next.addEventListener('click', function(){
        if(currentIndex < illustration.length - 1) {
            currentIndex++;
            animation();
        }
    });

    animation();
})

//Bungalow caroussel
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const flkty = new Flickity( carousel, {
    imagesLoaded: true,
    percentPosition: false,
    pageDots: true,
    prevNextButtons: true
  });
  
  const imgs = carousel.querySelectorAll('.carousel-cell img');
  // get transform property
  const docStyle = document.documentElement.style;
  const transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  
  flkty.on( 'scroll', function() {
    flkty.slides.forEach( function( slide, i ) {
      const img = imgs[i];
      const x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });
})

//Scale effect
function isVisible(section) {
    const screen = section.getBoundingClientRect();
    return screen.top < window.innerHeight + 100;
}

let isAnimateBungalow = false;
let isAnimatePlats = false;
let isAnimateReservation = false;
let isAnimateAbout = false;

window.addEventListener("scroll", function () {
    const bungalowSection = document.querySelector(".bungalow");
    const platsSection = document.querySelector(".plats");
    const reservationSection = document.querySelector(".reserve");
    const aboutSection = document.querySelector('.about')

    if (isVisible(bungalowSection) && !isAnimateBungalow) {
        bungalowSection.classList.add("visible");
        isAnimateBungalow = true;
    }

    if (isVisible(platsSection) && !isAnimatePlats) {
        platsSection.classList.add("visible");
        
        isAnimatePlats = true;
    }

    if (isVisible(reservationSection) && !isAnimateReservation) {
        reservationSection.classList.add("visible");
        isAnimateReservation = true;
    }

    if (isVisible(aboutSection) && !isAnimateAbout) {
        aboutSection.classList.add("visible");
        isAnimateAbout = true;
    }
});