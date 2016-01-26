$(document).ready(function(){
  $('.slider').bxSlider({
    // adaptiveHeight: true,
    // mode: 'fade',
    slideWidth       : 500,
    minSlides        : 3,
    maxSlides        : 3,
    moveSlides       : 1,
    slideMargin      : 5,
    startSlide       : 4,
    infiniteLoop     : false,
    hideControlOnEnd : true,
  });
  $(".fancybox")
    .fancybox({
      padding     : 0,
      arrows      : false,
      nextClick   : true,
      autoPlay    : true,
      playSpeed   : 1500,
      openEffect  : 'elastic',
      openSpeed   : 'slow',
      closeEffect : 'fade',
      closeSpeed  : 'fast',
      nextEffect  : 'elastic',
      nextSpeed   : 'slow',
      closeBtn    : false,
      helpers : {
        buttons : {},
        thumbs  : {
          width : 50,
          height  : 50
        }
      }
    });
});
