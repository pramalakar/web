var Corpora = angular.module('Corpora',['ui.router']);
Corpora.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('home',{
      url:'/home',
      // views:{
      // 	'slider@home':{
      // 		templateUrl:'templates/slider.html'
      // 	},
      // 	'content@home':{
      // 		templateUrl:'templates/contact.html'
      // 	}
      // },
      templateUrl:'templates/home.html'
      // controllerUrl:'';
    })
    .state('home.slider',{
      url:'/slider',
      templateUrl:'templates/slider.html',
      // controllerUrl:'';
    })
    .state('contact',{
      url:'/contact',
      templateUrl:'templates/contact.html'
    })
    .state('gallery',{
      url:'/gallery',
      templateUrl:'templates/gallery.html'
    })
    .state('services',{
      url:'/services',
      templateUrl:'templates/services.html'
    });
    $urlRouterProvider.otherwise("/");
}]);