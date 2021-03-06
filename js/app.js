$(function () {

     let header = $('#header'),
          introH = $('#intro').innerHeight(),
          scrollOffset = $(window);

     // fixed header

     checkScroll(scrollOffset);

     $(window).on('scroll', function () {
          scrollOffset = $(this).scrollTop();
          checkScroll(scrollOffset);
     });

     function checkScroll(scrollOffset) {
          if (scrollOffset >= introH) {
               header.addClass('fixed');
          } else {
               header.removeClass('fixed');
          }
     }

     // smooth scroll

     $('[data-scroll').on('click', function (event) {
          event.preventDefault();

          let $this = $(this),
               blockId = $this.data('scroll'),
               blockOffset = $(blockId).offset().top;

          $('#nav a').removeClass('active');
          $this.addClass('active');

          $('html, body').animate({
               scrollTop: blockOffset
          }, 1200);
     });

     // burger toggle

     $('#nav_toggle').on('click', function (event) {
          event.preventDefault();
          $(this).toggleClass('active');
          $('#nav').toggleClass('active');
     });


     // accordion

     $('[data-collapse]').on('click', function (event) {
          event.preventDefault();
          let $this = $(this),
               blockId = $this.data('collapse');
          $this.toggleClass('active');
     });

     // slider jon doe

     $('[data-slider]').slick({
          Infinity: true,
          fade: false,
          slidesToShow: 1,
          slidesToScroll: 1,
     });

});