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
        responsive: [
            {
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
                infinite: true,
                autoplay: false,
                dots: false
            }
        },
        // {
        //     breakpoint: 780,
        //     settings: {
        //         centerMode: true,
        //         centerPadding: '500px',
        //         slidesToShow: 1,
        //         infinite: true,
        //         autoplay: false,
        //         autoplaySpeed: 400,
        //         dots: true
        //     }
        // },
    ]
    });

    new WOW().init();
});


