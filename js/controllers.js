angular.module('Excelian.Controllers', [])
.controller('HomeCtrl',function($scope, $http, filterFilter){
	$http.get('data/transition.json')
	.success(function(data){
		$scope.transaction = data;
	});


	$scope.clearSearch = function(){
		$scope.searchQuery = '';
	}
});
