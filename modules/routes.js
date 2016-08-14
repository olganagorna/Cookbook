angular
    .module("recipeApp")
    .config(config);
function config($routeProvider) {
    $routeProvider
	    
	    .when('/recipes', {
	        controller: 'RecipesController',
	        controllerAs: 'RecipesCtrl',
	        templateUrl: 'views/recipes.html',
	    })
        .otherwise({ redirectTo: "/" });
};
