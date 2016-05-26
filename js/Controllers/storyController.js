app.controller('storyController', function($scope, $route, $http, $location, dataService){
	
	$scope.story = dataService.getProperty();
	
});