$(function(){
	sizeMode();
	window.onload = loadScript;
	
	$(window).resize(function() {
		sizeMode();
	});

	$(document).scroll( function() {
		var headerOffset = 100;
		var scrollPos = $(document).scrollTop();

		if (scrollPos > headerOffset) {
			// $('.top-nav .main-nav, .top-nav .logo').addClass('collapsed');
			$('#topnav').fadeIn();
		} else {
			// $('.top-nav .main-nav, .top-nav .logo').removeClass('collapsed');
			$('#topnav').fadeOut();
		}
	});
});

function sizeMode(){
	var div 	= $('#home');
	var alto 	= $( window ).height();
	var ancho 	= $( window ).width();

	if(ancho > 768){
		alto -= 100
		div.css('height', alto);
	}else{
		alto -= 50
		div.css('height', alto);
	}

}

function gMaps(){
	var mapOptions = {
    	zoom: 8,
    	center: new google.maps.LatLng(-34.397, 150.644),
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
    	 scrollwheel: false,
  	}

  	var map = new google.maps.Map(document.getElementById("maps"), mapOptions);
}

function loadScript() {
  	var script = document.createElement("script");
  	script.type = "text/javascript";
  	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' + '&signed_in=true&callback=gMaps';
  	document.body.appendChild(script);
}