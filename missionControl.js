var app = angular.module("myMod");

app.controller('missionControl', function($scope, redditService) {

		$scope.redditPayload = redditService.getContent().data.children;
		console.log($scope.redditPayload.data.children[0].data);

	

});
