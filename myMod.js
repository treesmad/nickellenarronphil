var app = angular.module("myMod", ["ngRoute"]);

<<<<<<< HEAD
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "instaview.html",
      controller: "fizzBuzzControl"
    })
    .when("/view2", {
      templateUrl: "partials/view2.html",
      controller: "fizzBuzzControl"
    })
    .when("/view3", {
      templateUrl: "fizzbuzz.html",
      controller: "fizzBuzzControl"
    })
    .otherwise({
      templateUrl: "instaview.html",
      controller: "fizzBuzzControl"
    })
});
=======


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
>>>>>>> 9ac63b52a2655a3c5f79e4edb62d2d208a6ae916
