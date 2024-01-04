(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	/*===============================  
		PORTFOLIO ACTIVE SLICK JS
	================================*/
	const portfolioSlider = () => {

		$('.portfolio-active').slick({
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			centerMode: true,
			centerPadding: "370px",
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 3,
						centerPadding: "80px",
					}
				}, {
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							centerPadding: "0px",
						}
				},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							centerPadding: "0px",
						}
				},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							centerPadding: "140px",
							arrows: false,
						}
				},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							centerPadding: "0px",
							arrows: false,
						}
				}
			]
		});

	}

	$(document).on('ready', () => {
		
		
  	})

	$(window).on('load', (event) => {

		setTimeout(function() {
			portfolioSlider()			
		}, 1500);

    });
	

})( jQuery );
