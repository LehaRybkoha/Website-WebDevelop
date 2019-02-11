var owl = $('.owl-carousel');
var owl2 = $('.owl-carousel-second');
owl.owlCarousel({
    items: 1,
    center:true,
    margin:10,
    pagination:true,
    dots:true,
    loop:true,
    autoplay:true,
    autoplayTimeout: 2500,
    autoplayHoverPause:true,
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