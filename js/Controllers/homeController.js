app.controller("HomeController",function($scope, $location, dataService, userService, $http){
 
    $scope.message = dataService.getDisplayMessage();
        
    if(!userService.checkUser())
        {
            $http.get("http://localhost:3000/auth/google").success(function(data){
                console.log(data);
                $scope.user = data;
                
            }).error(function(err){
                console.log(err);
            });
        }
    
});
