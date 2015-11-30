app.service('instaview', function ($http) { 
	console.log("test");
	var displayPhotos = {}

	$http({
  		method: 'GET',
		url: 'https://www.reddit.com/r/funny/.json'
	}).then(function successCallback(response) {
		console.log(response);
  	}, function errorCallback(response) {
    	console.log("response");
  	});

  	return {
  		getContent: function() {
  			return displayPhotos
  		}
  	}
})
app.controller('missionControl', [function (instaview) {
  	// response=instaview;
  	//  response.then(function(result) {  // this is only run after $http completes
   //     $scope.data = result;
   //     console.log("data.name"+$scope.data.name);
    // });

}]);
