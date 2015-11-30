var app = angular.module("myMod");

app.factory("fizzBuzzService", function() {

  var info = "";

  function FizzBuzzWoof(number) {
    if (number % 15 === 0 || number.toString().indexOf('15') >= 0) {
      info = "Fizzy and Buzzy";
    } else if (number % 5 === 0 || number.toString().indexOf('5') >= 0) {
      info = "Buzzy";
    } else if (number % 3 === 0 || number.toString().indexOf('3') >= 0) {
      info = "Fizzy";
    } else {
      info = "Just a plain old number";
    }
  };

  return {
    getInfo: function() {
      return info;
    },
    setInfo: function(userInput) {
      FizzBuzzWoof(userInput);
    }
  };
});
