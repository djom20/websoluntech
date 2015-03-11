$(function(){
	sizeMode();
	IOS7BlurredHeader();
	window.onload = loadScript;
	
	$(window).resize(function() {
		sizeMode();
	});

	$(document).scroll( function() {
		var headerOffset = 100;
		var scrollPos = $(document).scrollTop();

		if (scrollPos > headerOffset) {
			$('.navbar > .container .navbar-collapse ul, .navbar>.container .navbar-brand').addClass('collapsed');
			$('#topnav').fadeIn();
		} else {
			$('.navbar > .container .navbar-collapse ul, .navbar>.container .navbar-brand').removeClass('collapsed');
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

function scrollTop(){
	console.log('click');
	// $('html, body').animate({
 //        scrollTop: 0
 //    }, 2000);
}

function IOS7BlurredHeader(){
	// var content 				= document.querySelector('.content');
	// var duplicate 				= content.cloneNode(true);
	// var contentBlurred 			= document.createElement('div');
	// contentBlurred.className 	= 'content-blurred';
	// contentBlurred.appendChild(duplicate);

	// var header = document.querySelector('header');
	// header.appendChild(contentBlurred);

	// var contentWrapper = document.querySelector('.content-wrapper'), translation;

	// contentWrapper.addEventListener('scroll',function(){
	// 	translation = 'translate3d(0,' + (-this.scrollTop + 'px') + ',0)';
	// 	duplicate.style['-webkit-transform'] = translation;
	// 	duplicate.style['-moz-transform'] = translation;
	// 	duplicate.style['transform'] = translation;
	  
	//   	console.log(duplicate);
	// });

	// // offset to demo blurring
	// contentWrapper.scrollTop = 140;
}