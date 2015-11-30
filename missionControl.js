app.controller('missionControl', function(){

});

app.factory("instaview", function($http){
	return $http({
		method: 'GET',
		url:'https://www.reddit.com/r/funny.json'
	});

});









/*app.factory('serviceAPI', function($http){



 return $http({
	method: 'GET',
	url: 'https://twlaas.herokuapp.com/'

 	});

}


//$http returns a promise, takes a object as a argument*/
