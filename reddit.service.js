var app = angular.module("myMod");

app.service('redditService', function ($http) {

	var displayPhotos = {};

	$http({
  		method: 'GET',
			url: 'https://www.reddit.com/r/funny/.json'
	}).then(function successCallback(response) {
		displayPhotos.data = response.data;
  }, function errorCallback(response) {
  	displayPhotos.data = "Uh oh, error.";
  });

  	return {
  		getContent: function() {
  			return displayPhotos.data;
  		}
  	}
});
