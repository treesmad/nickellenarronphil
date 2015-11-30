var app = angular.module("myMod");

app.controller("fizzBuzzControl", function($scope, fizzBuzzService) {

  $scope.store = function(number) {
    fizzBuzzService.setInfo(number);
    // $scope.number = number;
    $scope.stuff = fizzBuzzService.getInfo();
  };


});
