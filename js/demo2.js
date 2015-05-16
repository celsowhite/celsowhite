jQuery(document).ready(function($) {
  var rsi = $('#slider-in-laptop').royalSlider({
    autoHeight: false,
    arrowsNav: false,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'fill',
    imageAlignCenter: true,
    loop: true,
    loopRewind: false,
    numImagesToPreload: 6,
    keyboardNavEnabled: true,
    autoScaleSlider: true,  
    autoScaleSliderWidth: 450,     
    autoScaleSliderHeight: 330,
    transitionType: 'fade',
    transitionSpeed: 1000,

    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    imgWidth: 792,
    imgHeight: 479,

    autoPlay: {
        // autoplay options go gere
        enabled: true,
      }



  }).data('royalSlider');
  $('#slider-next').click(function() {
    rsi.next();
  });
  $('#slider-prev').click(function() {
    rsi.prev();
  });
});