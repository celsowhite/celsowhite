$(document).ready(function(){

	var mq = window.matchMedia( '(min-width: 1024px)' );

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
	WEBSITE CAROUSEL
	===================*/

	if($('.website_images_carousel').length) {
		$('.website_images_carousel').slick({
			centerMode: true,
			slidesToShow: 1,
			draggable: false,
			arrows: false,
			accessibility: false
		});
	}

	// On click of a website name then scroll to its slide

	$('.website_nav li').click(function(){
		var websiteIndex = $(this).index();
		var websiteName = $(this).attr('data-title');

		// Scroll to the appropriate slide

		$('.website_images_carousel').slick('slickGoTo', websiteIndex);

		// Play the appropriate video only on desktop

		if(mq.matches) {
			$('.website_container[data-website="' + websiteName + '"]').each(function(){
				$(this).find('video')[0].play();
			});
			console.log('working');
		}

		// Set the mobile filter
		
		var websiteName = $(this).find('span').text();
		$('#filter_selected_website').text(websiteName);
		$('.website_nav').removeClass('mobile_open');
	});

	/*===================
	VIDEO AUTOPLAY
	Native html5 video autoplay not working because they are loaded in the Slick carousel. 
	Therefore, custom triggering their autoplay here.
	===================*/

	if($('.website_container.slick-current video').length) {
		$('.website_container.slick-current video')[0].play();
	}

	/*===================
	WEBSITE CONTENT TABS
	===================*/

	if($('.website_content_container').length) {
		$('.website_content_container').tabify({
			speed: 500
		});
	}

	/*===================
	MOBILE FILTER
	===================*/

	$('.website_mobile_filter').click(function(){
		$('.website_nav').toggleClass('mobile_open');
	});

});