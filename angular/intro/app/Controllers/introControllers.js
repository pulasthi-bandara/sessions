// module for controller in the app
angular.module('introControllers', []);

// get module in a variable 
var introControllers = angular.module('introControllers');

// a Controller
introControllers.controller('helloController', ['$scope', function($scope){
	$scope.data = [];

	$scope.data.message = 'Hello World';

	$scope.data.info = [
		{ title: 'First Name', value: 'John' },
		{ title: 'Last Name', value: 'Doe' },
		{ title: 'Age', value: '20'}
	];
}]);
