$(document).ready(function(){

 /*===================
 PAGE FADEIN & LOGO ANIMATION
 ===================*/

 setTimeout(function(){

 	// Fade out the circle animation and fadin the initials

 	$('span.circle').fadeOut('fast', function(){
 		$('span.initials').fadeIn('slow');
 	});

 	// Fade in the page

 	$('.page_container').addClass('loaded');

 }, 1000);

 /*===================
 SMOOTH SCROLL
 ===================*/

$('.website_names a').on('click',function (e) {
    e.preventDefault();

    // Capture the target div
    var target = this.hash;
    var $target = $('.website_container' + target);

    // Measure the offset of the first website from the top
    var firstWebsitePosition = $('.website_container:first-child').offset().top;

    // Measure the distance of the target div from the first website container
    var websiteDistance = -firstWebsitePosition + $target.offset().top;

    $('.website_images').animate({
        'scrollTop': websiteDistance + 10,
    }, 900, 'swing');
});

/*===================
WEBSITE NAME TRANSITION
===================*/

/*=== On Scroll of the websites container ===*/

$('.website_images').scroll(function(){

	/*=== Run this function for each individual container ===*/

	$('.website_container').each(function(){
		// Get the current positon of a website
		var position = $(this).offset().top;
		// Find the height of the container
		var height = $(this).height();
		// Capture the name of this specific container
		var websiteName = $(this).attr('id');
		// Activate this as long as the container is in view and at the top of the page
		if(position <= 50 && position > -height) {
			// Hightlight the corresponding name in the website names menu
			$('.website_names a').removeClass('active');
			$('.website_names a.' + websiteName).addClass('active');
		}
	});
});

});