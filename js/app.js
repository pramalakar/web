var Corpora = angular.module('Excelian',['Excelian.Controllers','ui.router']);
Corpora.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'templates/home.html',
      controller:'HomeCtrl'
    });
    $urlRouterProvider.otherwise("/home");
}]);