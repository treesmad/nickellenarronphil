
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

















/*
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


app.controller('controlAPI' function($scope, serviceApi, $interval){
		 serviceApi.then(function(response){
	 		$scope.lyrcis = response.data
	 
		});

    }, 1000);
})




app.factory('serviceAPI', function($http){



 return $http({
	method: 'GET',
	url: 'https://twlaas.herokuapp.com/'

 	});

}


//$http returns a promise, takes a object as a argument*/