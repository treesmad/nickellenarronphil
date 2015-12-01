var app = angular.module("myMod");

app.controller('missionControl', function($scope, redditService) {

		$scope.redditPayload = redditService.getContent();
		console.log($scope.redditPayload.data.children[1].data);

	var posts = response.data.children;

});
