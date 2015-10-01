angular.module('introFilters', [])

//filter adds years to value
angular.module('introFilters').filter('addYears', function(){
	return function(value) {
		return value + ', years'
	}
})