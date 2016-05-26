app.controller("readController",function($scope, $location, dataService, $route, $http, userService)
{
    if(!userService.checkUser())
        {
         $scope.user = userService.getUser();
          console.log($scope.user);
        }
    
    $scope.fetchStory = function(time_val) {
			
			/*$http.post('http://localhost:3000/story', time_val)
					.success(function(returnStory) {
						if (returnStory) {
							console.log(returnStory);
                            dataService.setProperty(returnStory);
                           $location.path('/story');
						}
                          else {

							dataService.setErrorMessage();
							console.log("Error in server connection");
							$location.path('/');
							
							
						}
					})
                    .error(function(msg){
						dataService.setErrorMessage();
						console.log("Error in server connection");
						$location.path('/');
					});*/
		}    
});