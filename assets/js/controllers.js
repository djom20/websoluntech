angular.module('soluntech')
.controller('homeCtrl', ['$scope', '$http', '$location', '$content', '$sce', '$gmaps',
    function($scope, $http, $location, $content, $sce, $gmaps) {

            window.resizeMode();     
            console.log($content);


			$(window).resize(function(){
					 $gmaps.init($scope.contacto);
			});


           $content
           .posts()
           .get()
           .success(function(rs){            	 
            	 console.log(rs);

            	 $scope.content = {}

            	 for(x in rs)

            	 	switch(rs[x].terms.category[0].name)
            	       {
            	       	   case "diseño a la medida":
            	       	      $scope.content["customDesign"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };

            	       	      $scope.content["customDesign"].content.content = $sce.trustAsHtml($scope.content["customDesign"].content.content);
            	       	   break;

            	       	   case "clientes":
            	       	      $scope.content["clientes"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };

            	       	      $scope.content["clientes"].content.content = $sce.trustAsHtml($scope.content["clientes"].content.content);

            	       	   break;	

            	       	    case "soluciones":
            	       	      $scope.content["soluciones"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };

            	       	      $scope.content["soluciones"].content.content = $sce.trustAsHtml($scope.content["soluciones"].content.content);

            	       	   break;	


            	       	    case "contacto":
            	       	      $scope.content["contacto"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };

            	       	      $scope.contacto = rs[x].content;
            	       	      $scope.content["contacto"].content.content = $sce.trustAsHtml($scope.content["contacto"].content.content);

            	       	   break;	

            	       	   case "apps":
            	       	      $scope.content["apps"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };
            	       	      $scope.content["apps"].content.content = $sce.trustAsHtml($scope.content["apps"].content.content);            	       	      
            	       	   break;	

            	       	   case "step1":
            	       	      $scope.content["step1"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };
            	       	      $scope.content["step1"].content.content = $sce.trustAsHtml($scope.content["step1"].content.content);            	       	      
            	       	   break;	


            	       	   case "step2":
            	       	      $scope.content["step2"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };
            	       	      $scope.content["step2"].content.content = $sce.trustAsHtml($scope.content["step2"].content.content);            	       	      
            	       	   break;	

            	       	   case "step3":
            	       	      $scope.content["step3"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };
            	       	      $scope.content["step3"].content.content = $sce.trustAsHtml($scope.content["step3"].content.content);            	       	      
            	       	   break;	

            	       	   case "step4":
            	       	      $scope.content["step4"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };
            	       	      $scope.content["step4"].content.content = $sce.trustAsHtml($scope.content["step4"].content.content);

            	       	   break;	

            	       	   case "step5":
            	       	      $scope.content["step5"] = {
            	       	      	  "title" : rs[x].title,
            	       	      	  "content" : rs[x]
            	       	      };
            	       	      $scope.content["step5"].content.content = $sce.trustAsHtml($scope.content["step5"].content.content);            	       	      
            	       	   break;	

            	       }



            	       $gmaps.init($scope.contacto || "Texto");

            	       console.log($scope.content);


           });

 
        $scope.formContact = {
            'name'      : '',
            'email'     : '',
            'tel'       : '',
            'message'   : ''
        };
 
        $scope.sendEmail = function(){
            console.log('Enviar Email');

    //last
            if(!$scope.formContact.name || !$scope.formContact.email || !$scope
            	.formContact.message)
            {
            	alert('Debes rellenar todos los campos');
            	angular.element('#contact form input:first').focus();
            	return;
            }

            $http.get('send.php')
            .success(function(rs){ 
            	 
            	 console.log(rs);
            	 console.log($scope.formContact);

            	 $scope.formContact.csrf = rs;
				 
				 $http.post("send.php", $scope.formContact)
				 .success(function (data) {
				     if(data._code === 200) {
					  $scope.clearForm();
					  alert(data._response);
						      }
					})
				 .error(function(err){
				 	console.log(err)
				 });


            });
            
        };
 
        $scope.clearForm = function(){
            $scope.formContact.name     = '';
            $scope.formContact.email    = '';
			$scope.formContact.tel      = '';
            $scope.formContact.message  = '';
        };

 	

    }]
);




function initGmaps() {
    
    this.init = function(data){ 

    	      console.log('initializing gmaps');

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
					icon: 'assets/imgs/marker.png'
				});
				
				var infowindow = new google.maps.InfoWindow({
					content: "<div class='blacked'>"+ data + "</div>"
				});
				
				google.maps.event.addListener(marcador, 'click', function() {
					infowindow.open(map,marcador);
				});



    
     }

     return this;

}


function contentApi($http) {


    this.uri = undefined;    
    this.base_url = 'http://54.84.73.92/wp/wp-json';

    this.posts = function() {
        this.uri = '/posts';
        return this;
    }
    this.post = function(id) {        
        this.post_id = id;
        this.uri = '/posts/' + this.post_id ;
        return this;
    }

    this.reset = this.destroy = function() {
        this.uri = '';
        return this;
    }

    //methods

    this.get = function() {
    	var uri = this.uri;
    	this.reset();
        return (uri) ? $http.get(this.base_url + uri) : false;
    }


    return this;



}


angular.module('soluntech')
.factory('$content', contentApi)
.factory('$gmaps', initGmaps)
