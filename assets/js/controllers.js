 
angular.module('soluntech')
.controller('HomeCtrl', ['$scope', '$http', '$location', '$content', '$sce',
    function($scope, $http, $location, $content, $sce) {

             scrolls();
            window.resizeMode();

            console.log($content);

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

            	       	      $scope.content["customDesign"].content.content
            	       	      .replace()

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


            	       console.log($scope.content);


           });

    }]
);



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
    	this.reset;
        return (uri) ? $http.get(this.base_url + uri) : false;
    }


    return this;



}


angular.module('soluntech')
.factory('$content', contentApi)