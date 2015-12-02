var app = angular.module("myMod");

app.controller('missionControl', function($scope, redditService) {

		$scope.redditPayload = redditService.getContent();
		// getContent() returns response.data.children which is an array.

});
