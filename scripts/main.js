(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wZXRyYnJ6ZWsvRGVza3RvcC9QaWZmbGUvZGV2L3BzZC1jbGVhbmVyLXdlYnNpdGUvbm9kZV9tb2R1bGVzL3Boby1kZXZzdGFjay9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3BldHJicnplay9EZXNrdG9wL1BpZmZsZS9kZXYvcHNkLWNsZWFuZXItd2Vic2l0ZS9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpe1xuXHR2YXIgc2Nyb2xsVG9wID0gMDtcblxuXHQkKCdib2R5JykuYWRkQ2xhc3MoJ3JlYWR5Jyk7XG5cblx0dmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24oZSl7XG5cdFx0aWYoZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0aWYoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkudmFsdWVPZigpID09PSBzY3JvbGxUb3ApIHJldHVybjtcblx0XHRzY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKS52YWx1ZU9mKCk7XG5cdFx0aWYoc2Nyb2xsVG9wID49ICQoJy5zZWN0aW9uLXZpZGVvJykub2Zmc2V0KCkudG9wICYmICEkKCdoZWFkZXInKS5oYXNDbGFzcygnc2hvd2luZycpKXtcblx0XHRcdCQoJyNhbHRoZWFkZXInKS5hZGRDbGFzcygnc2hvd2luZycpO1xuXHRcdH0gZWxzZSBpZihzY3JvbGxUb3AgPD0gJCgnLnNlY3Rpb24tdmlkZW8nKS5vZmZzZXQoKS50b3AgJiYgJCgnaGVhZGVyJykuaGFzQ2xhc3MoJ3Nob3dpbmcnKSkge1xuXHRcdFx0JCgnI2FsdGhlYWRlcicpLnJlbW92ZUNsYXNzKCdzaG93aW5nJyk7XG5cdFx0fVxuXHR9O1xuXG5cdCQod2luZG93KS5zY3JvbGwob25TY3JvbGwpO1xuXHRvblNjcm9sbCgpO1xufSk7Il19
