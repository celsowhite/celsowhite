/*=== ROYAL SLIDER ===*/

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
    numImagesToPreload: 0,
    navigateByClick: false,
    keyboardNavEnabled: false,
    autoScaleSlider: true,  
    autoScaleSliderWidth: 450,     
    autoScaleSliderHeight: 330,
    transitionType: 'fade',
    transitionSpeed: 350,

    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    imgWidth: 792,
    imgHeight: 479,

    autoPlay: {
        // autoplay options go gere
        enabled: true,
        stopAtAction: false,
        pauseOnHover: false,
        delay: 2600,
      }



  }).data('royalSlider');
  $('#slider-next').click(function() {
    rsi.next();
  });
  $('#slider-prev').click(function() {
    rsi.prev();
  });
});

/*=== CREATE BACKGROUND FADE EFFECT ON HOMEPAGE ===*/

var i = 1;
function changeClass(){
  $(".slideshow").removeClass("active" + i)
  if (i === 4){
    i=1;
  }
  else {
    i = i+1;
  }
  $(".slideshow").addClass("active" + i);
}
setInterval(changeClass, 3000);

/*=== TYPED JS ===*/

$(function(){
      $(".element").typed({
        strings: ["media companies", "non-profits", "creators", "agencies"],
        typeSpeed: 0,
        backDelay: 2000,
        loop: true
      });
  });

/*=== DYNAMICALLY CHANGE WORDS ON HOMEPAGE ===*/

(function() {
  var words = ['news ', 'media companies', 'creators', 'start-ups'], i=0;
  
  setInterval(function() {
    $('#change_word').fadeOut(function(){
      $(this).html(words[i=(i+1)%words.length]).fadeIn();});
  }, 3000);
    })();