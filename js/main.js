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
			draggable: true,
			arrows: false,
			accessibility: false
		});
	}

	// Upon changing a slide via the slick carousel then trigger the appropriate click functions for the website nav.

	$('.website_images_carousel').on('afterChange', function(event, slick, currentSlide){
		$('.website_nav li').eq(currentSlide).trigger('click');
	});

	// On click of a website name then scroll to its slide

	$('.website_nav li').click(function(){

		var targetWebsiteIndex = $(this).index();
		var targetWebsiteName = $(this).attr('data-title');

		// Scroll to the appropriate slide

		$('.website_images_carousel').slick('slickGoTo', targetWebsiteIndex);

		// Open and play the appropriate video only on desktop

		if(mq.matches) {

			// Loop through the website containers and trigger play/pause

			$('.website_container').each(function(){

				const containerWebsiteName = $(this).data('website');
				const video = $(this).find('video');
				const videoURL = video.attr('data-src');

				// If this is the website container we are transitioning to then load the video and play.
				// Also make sure it's not the cloned version of this website slide.

				if (containerWebsiteName === targetWebsiteName && !$(this).hasClass('slick-cloned')) {
					
					// Load the video
					
					video.attr('src', videoURL);

					// Remove the data-src attribute so we don't load it again

					video.removeAttr('data-src');

					// Play the video

					video[0].play();

				}

				// Else pause all other videos so we don't have multiple media running at the same time.

				else {

					video[0].pause();
					
				}

			});

		}

		// Set the mobile filter
		
		const websiteName = $(this).find('span').text();
		$('#filter_selected_website').text(websiteName);
		$('.website_nav').removeClass('mobile_open');

		// Track the click event via google analytics

		ga('send', 'event', 'Project', 'View', websiteName);

	});

	/*===================
	1st Project Functions
	===================*/

	// Trigger video Autoplay. Native html5 video autoplay not working because they are loaded in the Slick carousel. 
	// Therefore, custom triggering their autoplay here.

	if($('.website_container.slick-current video').length) {
		$('.website_container.slick-current video')[0].play();
	}

	// Track first project on page load

	const featuredWebsiteName = $('.website_nav li:first-child span').text();

	if(featuredWebsiteName){
		ga('send', 'event', 'Project', 'View', featuredWebsiteName);
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

	/*===================
	WEBSITE CLICK EVENT
	===================*/

	const websiteLinks = document.querySelectorAll('.website_link');

	Array.from(websiteLinks).forEach(websiteLink => {

		websiteLink.addEventListener('click', function() {
			
			const href = this.getAttribute('href');

			// Track the click event via google analytics

			ga('send', 'event', 'Project', 'Click', href);

		});
	});

});