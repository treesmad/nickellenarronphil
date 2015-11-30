var app = angular.module("myMod", ["ngRoute"]);


app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "instaview.html",
      controller: "missionControl"
    });
    $routeProvider
    .when("/view2", {
      templateUrl: "partials/view2.html",
      controller: "missionControl"
    });
    $routeProvider
    .when("/view3", {
      templateUrl: "fizzbuzz.html",
      controller: "missionControl"
    });
    
});

