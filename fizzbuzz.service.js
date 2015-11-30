var app = angular.module("myMod");

app.factory("fizzBuzzService", function() {

  var userNum;
  var info = "";

  function FizzBuzzWoof(number) {
    if (number % 3 === 0 || number.toString().indexOf('3') >= 0) {
      return "fizz";
    } else if (number % 5 === 0 || number.toString().indexOf('5') >= 0) {
      return "buzz";
    } else if (number % 7 === 0 || number.toString().indexOf('7') >= 0) {
      return "woof";
    }
    return number;
  };

  return {
    getInfo: function() {
      return info;
    },
    setInfo: function(userInput) {
      return FizzBuzzWoof(userInput)
    }
  };
});
