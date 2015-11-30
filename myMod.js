var app = angular.module("myMod", ["ngRoute"]);

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
