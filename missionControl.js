app.controller('missionControl', function(){

});

app.factory("instaview", function($http, $scope){
	return $http({
		method: 'GET',
		url:'https://www.reddit.com/r/funny.JSON'
		method: 'Post'
	})
	.then(function(response){
			$scope."" = response.data
	})

});















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