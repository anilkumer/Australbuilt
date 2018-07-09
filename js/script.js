$(function(){
	'use strict';
	//Slider
	$('.owl').each( function() {
		var $carousel = $(this);
		$carousel.owlCarousel({
			items : $carousel.attr('data-items'),
			itemsDesktop : [1199,$carousel.attr('data-itemsDesktop')],
			itemsDesktopSmall : [979,$carousel.attr('data-itemsDesktopSmall')],
			itemsTablet:  [797,$carousel.attr('data-itemsTablet')],
			itemsMobile :  [479,$carousel.attr('data-itemsMobile')],
			navigation : JSON.parse($carousel.attr('data-buttons')),
			pagination: JSON.parse($carousel.attr('data-pag')),
			slideSpeed: 1000,
			paginationSpeed : 1000,
		});
	 });
	$(window).load(function()
	{
		$('.preloader p').fadeOut();
		$('.preloader').delay(300).fadeOut('slow');
		$('body').delay(400).css({'overflow':'visible'});
	});
	//Counterup
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	//Menu
	$('.navbar-toggle').on('click',function(){
		height_w();
	});
	function height_w()
	{
		$('.navbar-nav').css('max-height',$(window).height()-65);
	}
	window.onresize = function()
	{
		height_w();
	}
	//Search
	$('.search-box i').on('click',function(){
		var $ev=$(this).parent().find('form');
		if($ev.hasClass('open'))
		{
			$ev.removeClass('open');
			$ev.fadeOut();
		}
		else
		{
			$ev.addClass('open');
			$ev.fadeIn();
		}
	});
	
});