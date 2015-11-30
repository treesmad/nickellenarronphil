var app = angular.module("myMod", ["ngRoute"]);



app.config(function($routeProvider) {  
		$routeProvider    
			.when('/',  {
				controller: 'missionControl', 
				templateUrl: 'instaview.html'
		   }) //no semicolon
	   		.when('/view2', {
	   			controller: 'missionControl', 
	   			templateUrl: 'partials/view2.html' 
	   	   }) //no semicolon   
	   	.otherwise({ redirectTo: '/' }); 

	});      