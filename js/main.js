// SLIDER
$(function () {
    $('.design-slider').slick({
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="images/arrow-left.svg" class="arrow arrow-left" alt="">',
        nextArrow: '<img src="images/arrow-right.svg" class="arrow arrow-right" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});


// modal-btn
// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//     modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//     modal.classList.remove("open-modal");
// });



// FIXED NAVBAR
const navbar = document.querySelector('.header__top');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
        navbar.classList.add('fixed-color');
    } else {
        navbar.classList.remove('fixed-nav');
    };

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    };
});

// ACTUAL YEAR
const date = document.getElementById('date');
date.innerHTML = new Date().getUTCFullYear();
