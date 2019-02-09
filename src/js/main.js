var owl1 = $('.owl-carousel-first');
var owl2 = $('.owl-carousel-second');
owl1.owlCarousel({
    center:true,
    height:40,
    width:40,
    margin:25,
    loop:true,
    autoplay:true,
    autoplayTimeout: 2500,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive:{
        480:{
            items:1
        },
        650:{
            items:3
        },            
        960:{
            items:4
        },
        1200:{
            items:4
        }
    }
});


owl2.owlCarousel({
    loop:true,
    margin: 100,
    center: true,
    autoWidth: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    responsive:{
        480:{
            items:3
        },
        650:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:5
        }
    }
});