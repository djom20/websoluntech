$(function(){

	$(document).ready(function(){
		resizeMode();
		scrolls();
		videoBackground();
	});

	window.onload = loadScript;
	
	$(window).resize(function(){
		resizeMode();
	});

	$(document).scroll( function(){
		var headerOffset 	= 100;
		var scrollPos 		= $(document).scrollTop();
		var ancho 			= $( window ).width();

		if(ancho > 768){
			if (scrollPos > headerOffset){
				$('.navbar > .container .navbar-collapse ul, .navbar>.container .navbar-brand').addClass('collapsed');
				$('#topnav').fadeIn();
			} else {
				$('.navbar > .container .navbar-collapse ul, .navbar>.container .navbar-brand').removeClass('collapsed');
				$('#topnav').fadeOut();
			}
		}
	});
});

function videoBackground(){
	var videoFiles = 
	[
		['https://s3.amazonaws.com/soluntech/videos/background.mp4', 'video/mp4'],
		['https://s3.amazonaws.com/soluntech/videos/background.webm', 'video/webm']
	];

	setTimeout(function(){
		$('#videos').videobackground({
			videoSource: videoFiles,
			loop: true
		});
		$('#videos').videobackground('play');
	}, 50);
}

function resizeMode(){
	var alto 	= $( window ).height();
	var ancho 	= $( window ).width();

	// $('#videos').videobackground('resize');

	setTimeout(function(){
		if(ancho > 768){
			$('#videos, #videos>video').css('height', alto);
			$('#home').css('height', alto - 95);
		}else{
			$('#videos, #videos>video').css('height', alto);
			$('#home').css('height', alto - 70);
		}
	}, 60);
}

function gMaps(){
	var mapOptions = {
    	zoom: 16,
    	center: new google.maps.LatLng(11.0121669,-74.7929595),
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
    	scrollwheel: false,
  	}

  	var map = new google.maps.Map(document.getElementById("maps"), mapOptions);

  	// Creamos un marcador y lo posicionamos en el mapa
	var marcador = new google.maps.Marker({
  		position: new google.maps.LatLng(11.012203, -74.792069),
  		map: map,
  		title: 'Soluntech SAS',
  		icon: 'assets/imgs/maps/marker60x90.png'
	});
}

function loadScript() {
  	var script = document.createElement("script");
  	script.type = "text/javascript";
  	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' + '&signed_in=true&callback=gMaps';
  	document.body.appendChild(script);
}

function scrollToTop(){
	$('html, body').animate({ scrollTop: 0 }, 2000);
}

function scrolls(){
	$(".link_to").click(function(e){
		e.preventDefault();

		var id 		= $(this).attr('href');
		var scroll 	= $(id).offset().top - 50;
		if(id == "#home"){ scroll = 0; }

		if($( window ).width() > 768){
			if(id == "#apps" || id == "#contact"){
				scroll -= 5;
			}
		}else{
			if(id != "#home"){
				scroll -= 20;
			}
		}

		if(id != "#home"){ $('.navbar-default .navbar-toggle').click(); }

		$('html, body').animate({
			scrollTop: scroll
		}, 2000);
	});
}