var Controllers = angular.module('Controllers', []);

Controllers.controller('HomeCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        console.log('Init Controller');
    }]
);