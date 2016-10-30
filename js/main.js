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
	WEBSITE CAROUSEL
	===================*/

	$('.website_images_carousel').slick({
		centerMode: true,
		slidesToShow: 1,
		draggable: false,
		arrows: false,
		accessibility: false
	});

	// On click of a website name then scroll to its slide

	$('.website_nav li').click(function(){
		// Scroll to the appropriate slide
		var websiteIndex = $(this).index();
		$('.website_images_carousel').slick('slickGoTo', websiteIndex);
		// Set the mobile filter
		var websiteName = $(this).find('span').text();
		$('#filter_selected_website').text(websiteName);
		$('.website_nav').removeClass('mobile_open');
	});

	/*===================
	WEBSITE CONTENT TABS
	===================*/

	$('.website_content_container').tabify({
		speed: 500
	});

	/*===================
	MOBILE FILTER
	===================*/

	$('.website_mobile_filter').click(function(){
		$('.website_nav').toggleClass('mobile_open');
	});

});