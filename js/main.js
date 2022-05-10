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