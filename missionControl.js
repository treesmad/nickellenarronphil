var app = angular.module("myMod");

app.controller('missionControl', function($scope, redditService) {

	$scope.redditPayload = redditService.getContent().data.children;

});
