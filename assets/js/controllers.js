angular.module('App')
.controller('HomeCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        console.log('Init Controller');
        $scope.formContact = {
        	'name' 		: '',
        	'email' 	: '',
        	'tel' 		: '',
        	'message' 	: ''
        };

        $scope.sendEmail = function(){
        	console.log('Enviar Email');
        	console.log($scope.formContact);

        	$http.post(
                "send.php", $scope.formContact
            ).success(function (data) {
                // if(data._code === 200) {
                    $scope.clearForm();
                    // alert(data._response);
                // }
            });
        };

        $scope.clearForm = function(){
        	$scope.formContact.name 	= '';
        	$scope.formContact.email 	= '';
        	$scope.formContact.tel 		= '';
        	$scope.formContact.message 	= '';
        };

        /* List of Posts */
        // $scope.posts = postService.get();
    }
]);