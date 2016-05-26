app.service('userService', function($http, $location, $route) {
	var user = null;

     return {
		
        checkUser : function()
         {
            if(user!=null)
            return true;
            else
            return false;
        },
        
        getUser : function()
        {
           $http.get('http://localhost:3000/auth/google')
           .success(function(returnUser) {
             if(returnUser){
                user = returnUser;
                console.log(user);
                return user; 
             }
               else{
                   console.log(returnUser);
                   return null
               }
           })
           .error(function(err){
               user = null;
               console.log(err);
               $location.path("/");
           });
        
     }
    };

});