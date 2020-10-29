$(document).ready(function() {

  $('.modalbox').fancybox();

   wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
    )
   wow.init();

        (function() {

              "use strict";

              var toggles = document.querySelectorAll(".c-hamburger");

              for (var i = toggles.length - 1; i >= 0; i--) {
                  var toggle = toggles[i];
                  toggleHandler(toggle);
              };

              function toggleHandler(toggle) {
                  toggle.addEventListener( "click", function(e) {
                      e.preventDefault();
                      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                  });
              }

   })();

    const
    SLIDES_TO_SHOW = 1,
    $slickElement = $('.slider');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    const
        page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW),
        numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);

    $('.slick-nav__wrap .slides-num', slick.$slider.parent()).text(`${page} / ${numPages}`);
    });

    $slickElement.slick({
    slidesToShow: SLIDES_TO_SHOW,
    slidesToScroll: SLIDES_TO_SHOW,
    arrows: false,
    infinite: false,
    });

    $slickElement.parent().find('.slick-nav__wrap .arrow-next').click(function() {
    $slickElement.slick('slickNext');			   
    });
    $slickElement.parent().find('.slick-nav__wrap .arrow-prev').click(function() {
    $slickElement.slick('slickPrev');
    });

    

    const
    SLIDES_TO_SHOW2 = 1,
    $slickElement2 = $('.slider2');

    $slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    const
        page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW2),
        numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW2);

    $('.slick-nav__wrap .slides-num', slick.$slider.parent()).text(`${page} / ${numPages}`);
    });

    $slickElement2.slick({
    slidesToShow: SLIDES_TO_SHOW2,
    slidesToScroll: SLIDES_TO_SHOW2,
    arrows: false,
    infinite: false,
    });

    $slickElement2.parent().find('.slick-nav__wrap .arrow-next').click(function() {
    $slickElement2.slick('slickNext');        
    });
    $slickElement2.parent().find('.slick-nav__wrap .arrow-prev').click(function() {
    $slickElement2.slick('slickPrev');
    });


    


});