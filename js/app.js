 var app = angular.module("StoryShot", [ 'ngRoute' ]);

 app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "pages/home.html",
			controller : "HomeController"
		})
         .when("/read", {
			templateUrl : "pages/read.html",
			controller : "readController"
		})
         .when("/story", {
          templateUrl : "pages/story.html",
          controller : "storyController"
		})
		.otherwise({
			templateUrl: "pages/error.html"
		});
});

