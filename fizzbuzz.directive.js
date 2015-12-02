var app = angular.module("myMod");

app.directive("fizzy", function() {
  return {
    restrict: 'EACM',
    template: '<h1>Your number is {{number}} and is {{isFizzBuzz}}.</h1>',
    replace: true
  }
});
