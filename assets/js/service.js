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
});