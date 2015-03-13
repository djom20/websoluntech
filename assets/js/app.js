var App = angular.module('soluntech', [
    'ngRoute'
]);

App.config(['$routeProvider', '$httpProvider', '$locationProvider' ,
    function($routeProvider, $httpProvider, $locationProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        var param = function(obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        $httpProvider.defaults.transformRequest = [function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];

        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            }).
            otherwise({
                redireTo: '/'
            });

            //$locationProvider.html5Mode(true);
    }
])
.run(function($rootScope){

         resizeMode();
        IOS7BlurredHeader();
        scrolls();

           $(document).scroll( function(){
        var headerOffset    = 0;
        var scrollPos       = $(document).scrollTop();
        var ancho           = $( window ).width();

        if(ancho > 768){ headerOffset   = 100; }
        else{ headerOffset  = 80; }

        if (scrollPos > headerOffset){
            $('.navbar > .container .navbar-collapse ul, .navbar>.container .navbar-brand').addClass('collapsed');
            $('#topnav').fadeIn();
        } else {
            $('.navbar > .container .navbar-collapse ul, .navbar>.container .navbar-brand').removeClass('collapsed');
            $('#topnav').fadeOut();
        }
    });

});



 window.onload = loadScript;
    
    $(window).resize(function() {
        resizeMode();
    });

 


window.resizeMode = function(){
    var alto    = $( window ).height();
    var ancho   = $( window ).width();

    setTimeout(function(){
        if(ancho > 768){
            alto -= 95
            $('#home').css('height', alto);
        }else{
            alto -= 70
            $('#home').css('height', alto);
        }
    }, 50);
}


function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' + '&signed_in=true&callback=gMaps';
    document.body.appendChild(script);
}

function scrollToTop(){

    var media = $("body").height();
    var maxTime = 1000;

    var offset = $("#topnav").offset().top;

    console.log(offset)

    var time = (offset * maxTime) / media;

    console.log(time, 'time');

    $('html, body').animate({ scrollTop: 0 }, time);
}

function scrolls(){
    $('body').on('click', '.link_to', function(e){
        e.preventDefault();

        var id      = $(this).attr('href');
        var scroll  = $(id).offset().top - 50;

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


          var media = $("body").height();
          var maxTime = 2000;
          
          var offset = $(id).offset().top;
          
          console.log(offset)
          
          var time = (offset * maxTime) / media;
          
          console.log(time, 'time');

        $('html, body').animate({
            scrollTop: scroll
        }, time);
    });
}

function IOS7BlurredHeader(){
    // var content              = document.querySelector('.content');
    // var duplicate                = content.cloneNode(true);
    // var contentBlurred           = document.createElement('div');
    // contentBlurred.className     = 'content-blurred';
    // contentBlurred.appendChild(duplicate);

    // var header = document.querySelector('header');
    // header.appendChild(contentBlurred);

    // var contentWrapper = document.querySelector('.content-wrapper'), translation;

    // contentWrapper.addEventListener('scroll',function(){
    //  translation = 'translate3d(0,' + (-this.scrollTop + 'px') + ',0)';
    //  duplicate.style['-webkit-transform'] = translation;
    //  duplicate.style['-moz-transform'] = translation;
    //  duplicate.style['transform'] = translation;
      
    //      console.log(duplicate);
    // });

    // // offset to demo blurring
    // contentWrapper.scrollTop = 140;
}
