 
angular.module('soluntech')
.controller('HomeCtrl', ['$scope', '$http', '$location', '$content',
    function($scope, $http, $location, $content) {
        console.log('Init Controller');
           
            window.resizeMode();

            console.log($content);


           $content
           .posts()
           .get()
           .success(function(rs){
            	 console.log(rs);
           });


    }]
);



function contentApi($http) {


    this.uri = undefined;
    this.obj_key = undefined;
    this.field_key = undefined;
    this.base_url = 'http://54.84.73.92/wp/wp-json';

    this.posts = function() {
        this.uri = '/posts';
        return this;
    }
    this.post = function(id) {
        console.log(_obj_key);
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
        return (this.uri) ? $http.get(this.base_url + this.uri) : false;
    }


    return this;



}


angular.module('soluntech')
.factory('$content', contentApi)