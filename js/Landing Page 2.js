$(document).ready(function(){
    var mySwiper = new Swiper('.swiper-container',{
        // Optional parameters
        loop: true,
        effect: "fade",
        speed: 1500,
        direction: 'vertical',
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        fadeEffect: {
            crossFade: true
          },
          autoplay: {
            delay: 5000,
          },
      });
      // swiper events 
      mySwiper.on('slideChangeTransitionStart', function() { 
        anime({
            targets: '.swiper-slide-active .slide-right img',
            scale: [1.2 , 1],
            opacity: [0, 1], 
            easing: 'easeInOutQuad',
          });
          anime({
            targets: '.swiper-slide-active .slide-left .element',
            translateY: [50, 0],
            opacity: [0, 1], 
            delay: anime.stagger(150, {start: 1700}),
            easing: 'easeInOutQuad',
          });
       });

      anime({
        targets: 'header',
        scaleX: [0 , 1],
        translateX: [-400, 0],
        opacity: [0, 1], 
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.logo img',
        rotate: 360,
        opacity: [0, 1], 
        delay: 500,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.menu li',
        translateY: [50, 0],
        opacity: [0, 1], 
        delay: anime.stagger(200, {start: 700}),
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.slide-right img',
        scaleX: [1.2 , 1],
        opacity: [0, 1], 
        delay: anime.stagger(200, {start: 2000, form : "last"}),
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.swiper-slide-active .slide-left .element',
        translateY: [50, 0],
        opacity: [0, 1], 
        delay: anime.stagger(250, {start: 1700}),
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.swiper-button-prev',
        translateX: [-100, 0],
        opacity: [0, 1], 
        delay: 3000,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.swiper-button-next',
        translateX: [100, 0],
        opacity: [0, 1], 
        delay: 3000,
        easing: 'easeInOutQuad',
      });
      
});
