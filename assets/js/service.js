angular.module('App')
.service('postService', function(){
    var posts = {};

    this.save = function (post){
        console.log('Element Saved');
        return true;
    }

    this.get = function (post){
        if(post != null){
            return true;
        }else{
            return posts;
        }
    }

    this.delete = function (post){
        console.log('Element Deteled');
        return true;
    }
})
.factory('$content', function($http){
    this.url        = undefined;    
    this.base_url   = 'http://54.84.73.92/wp/wp-json';

    this.posts = function() {
        this.url = '/posts';
        return this;
    }

    this.post = function(id) {        
        this.post_id    = id;
        this.url        = '/posts/' + this.post_id ;
        return this;
    }

    this.destroy = function() {
        this.url = '';
        return this;
    }

    this.get = function() {
        var url = this.url;
        this.destroy();
        return (url) ? $http.get(this.base_url + url) : false;
    }

    return this;
});