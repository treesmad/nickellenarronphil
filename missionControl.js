var app = angular.module("myMod");

app.controller('missionControl', function($scope, redditService) {

		$scope.redditPayload = redditService.getContent();
		console.log($scope.redditPayload);

});
