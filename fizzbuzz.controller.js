var app = angular.module("myMod");

app.controller("fizzBuzzControl", function($scope, fizzBuzzService) {

  $scope.store = function(number) {
    fizzBuzzService.setInfo(number);
    $scope.isFizzBuzz = fizzBuzzService.getInfo();
    // Renamed $scope.stuff to $scope.isFizzBuzz for clarity's sake.
  };


});
