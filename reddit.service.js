var app = angular.module("myMod");

app.service('redditService', function ($http) {

	var displayPhotos = {};

	$http({
  		method: 'GET',
			url: 'https://www.reddit.com/r/funny/.json'
	}).then(function successCallback(response) {
		displayPhotos.data = response.data.data.children; // This is not a typo.  Two .datas for real.
  }, function errorCallback(response) {
  	console.log("Couldn't get data from reddit.");
  });

  	return {
  		getContent: function() {
  			return displayPhotos.data;
  		}
  	}
});
