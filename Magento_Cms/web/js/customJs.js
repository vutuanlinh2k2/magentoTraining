define([
    'jquery',
    'owlcarousel'
], function ($) {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    });
});

