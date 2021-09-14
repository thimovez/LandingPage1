$(document).ready(function(){
    $('.slider__photo').slick({
        infinite: true,
        speed: 550,
        slidesToShow: 1,
        draggable: false,
        centerMode: true,
        appendArrows:'.slider-arrows',
        variableWidth: true,
        adaptiveHeight: true,
        mobileFirst: true,
        autoplay: false,
    //     responsive: [
    //         {
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 1,
    //             infinite: true,
    //             autoplay: false,
    //             dots: false
    //         }
    //     },
    //     {
    //         breakpoint: 900,
    //         settings: {
    //             slidesToShow: 1,
    //             infinite: true,
    //             autoplay: true,
    //             autoplaySpeed: 400,
    //             dots: true
    //         }
    //     },
    // ]
    });
});

