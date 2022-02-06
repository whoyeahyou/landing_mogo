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
          let blockId = $(this).data('scroll'),
               blockOffset = $(blockId).offset().top;
          $('html, body').animate({
               scrollTop: blockOffset
          }, 1500);
     });

















});