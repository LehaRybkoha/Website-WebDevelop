let owl = $('.owl-carousel');
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

//connecting navbar to the top of our webpage
$(document).ready(function(){
  $("#header").affix({
    offset: { 
      top: 200 
    }
  });
  $("#header").on('affixed.bs.affix', function(){
    alert("Меню навигации была прикреплена. Теперь она не прокручивается вместе со страницей.");
  });
});