// module for controller in the app
angular.module('introControllers', []);

// get module in a variable 
var introControllers = angular.module('introControllers');

// a Controller
introControllers.controller('helloController', function($scope){
	$scope.data = [];

	$scope.data.message = 'Hello World';
});