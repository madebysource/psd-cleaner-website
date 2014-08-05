$(function(){
	var scrollTop = 0;

	$('body').addClass('ready');

	var onScroll = function(e){
		if(e){
			e.preventDefault();
		}

		if($(document).scrollTop().valueOf() === scrollTop) return;
		scrollTop = $(document).scrollTop().valueOf();
		if(scrollTop >= $('.section-video').offset().top && !$('header').hasClass('showing')){
			$('#altheader').addClass('showing');
		} else if(scrollTop <= $('.section-video').offset().top && $('header').hasClass('showing')) {
			$('#altheader').removeClass('showing');
		}
	};

	$(window).scroll(onScroll);
	onScroll();
});