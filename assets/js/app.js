(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
	  var timeout;

	  return function debounced () {
		  var obj = this, args = arguments;
		  function delayed () {
			  if (!execAsap)
				  func.apply(obj, args);
			  timeout = null;
		  };

		  if (timeout)
			  clearTimeout(timeout);
		  else if (execAsap)
			  func.apply(obj, args);

		  timeout = setTimeout(delayed, threshold || 100);
	  };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
// Functions

var fadeInOnScroll = function () {

	var divs = $('.is-invisible');

	$(document).on('scroll', function() {
		$.each(divs, function(i, item) {
			if( $(item).offset().top <= $(window).scrollTop() + $(window).height() ) {
				$(item).addClass('is-visible');
			}
		});
	});

	// Fade in elements in the VP on docoment.ready
	$.each(divs, function(i, item) {
		if( $(item).offset().top <= $(window).scrollTop() + $(window).height() ) {
			$(item).addClass('is-visible');
		}
	});
};


var collapsableNav = function () {
	$('.top-nav .main-nav, .top-nav .logo').removeClass('collapsed');

	$(document).scroll( function() {

		var headerOffset = 100;
		var scrollPos = $(document).scrollTop();

		if (scrollPos > headerOffset) {
			$('.top-nav .main-nav, .top-nav .logo').addClass('collapsed');
		} else {
			$('.top-nav .main-nav, .top-nav .logo').removeClass('collapsed');
		}

	});
};

var accordionAnimation = function(accordion){
	var $this = $(accordion);
	var $link = $this.find('dd > a');

	$this.find('.content.active').css('height', $this.find('.content.active').children().outerHeight());

	$link.on('click', function(){
		if( $(this).attr('href') == '#' + $this.find('.content.active').attr('id') ) {
			$(this).next().css('height', 0);
		} else {
			$this.find('.content.active').css('height', 0);
			$(this).next().css('height', $(this).next().children().outerHeight());
		}

	});
};

var setFooterSpace = function() {

	// Makes sure padding is enough in bottom to have the footer position absolute
	var wrapper = $('.main-content-container')
	var footerHeight = $('.page-footer').outerHeight();

	wrapper.css('padding-bottom', footerHeight);
};

// Docment Ready

$(document).ready(function(){
	$(document).foundation();

	accordionAnimation($('.accordion.animated'));

	// $('form.wpcf7-form .wpcf7-form-control-wrap').next().remove();
	// $('.wpcf7-response-output.wpcf7-validation-errors').remove();

	// Calling Document functions
	fadeInOnScroll();
	collapsableNav();
	setFooterSpace();

	$('.off-canvas-toggle, .site-overlay').on('click', function(e) {
		e.preventDefault();
		if ( $('body').hasClass('is-open') ) {
			$('body').removeClass('is-open');
			$(document).unbind("touchmove");
		} else {
			$('body').addClass('is-open');
			$(document).bind("touchmove",function(e){
				e.preventDefault();
			});
		}
	});

	$(window).smartresize(function(){
		if ($(window).width() > 767) {
			// Makes sure that the off canvas navigations open state dissapears when windows too big
			$('body').removeClass('is-open');
		}

		setFooterSpace();

	});



});
