$(document).ready(function(){
    $('.client-slider').owlCarousel({
        loop: true,
        nav: false,
        pagination: true,
        items: 5,
        margin: 20,
        slideSpeed: 300,
        autoPlay: false,
        mouseDrag: true,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',  
        responsive:{
          0:{
              items:2,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          }
      }            
      });
    $('.services-slider').owlCarousel({
        loop: true,
        nav: false,
        pagination: true,
        items: 5,
        margin: 20,
        slideSpeed: 300,
        autoPlay: false,
        mouseDrag: true,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive:{
          0:{
              items:2,
              margin: 10,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          }
      }    
      });
    $('.experience-slider').owlCarousel({
        loop: true,
        nav: true,
        pagination: true,
        items: 5,
        margin: 20,
        slideSpeed: 300,
        autoPlay: false,
        mouseDrag: true,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',   
        navText: [
          "<i class='bi bi-arrow-left'></i>",
          "<i class='bi bi-arrow-right'></i>"
        ],   
        responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          }
      }   
      });
    $('.testimonials-slider').owlCarousel({
        loop: true,
        nav: true,
        pagination: true,
        items: 1,
        margin: 0,
        slideSpeed: 300,
        autoPlay: false,
        mouseDrag: true,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',   
        navText: [
          "<i class='bi bi-arrow-left'></i>",
          "<i class='bi bi-arrow-right'></i>"
        ],     
      });
      $(".footer-block").click(function () {
        if ($(this).hasClass("active")) {
          $(".footer-block").removeClass("active");
        }
        else {
          $(".footer-block").removeClass("active");
          $(this).addClass("active");
        }
      });
    //   $('.footer-block').click(function(){
    //       $(this).children('.toggle-menu').toggleClass(active, addOrRemove);
    //       if ( addOrRemove ) {
    //         $( ".toggle-menu" ).addClass( className );
    //       } else {
    //         $( ".toggle-menu" ).removeClass( className );
    //       }
    //   })
});