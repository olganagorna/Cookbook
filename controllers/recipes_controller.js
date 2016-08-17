angular.module('recipeApp').controller('RecipesController', RecipesCtrl);
 
RecipesCtrl.$inject = ['$scope'];
function RecipesCtrl($scope) {

	$scope.active = 0;
	$scope.saved = localStorage.getItem('recipes');
	$scope.recipes = (localStorage.getItem('recipes')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('recipes', JSON.stringify($scope.recipes));
    $scope.model = [];
    // $scope.edit_model = [];
    // console.log($scope.recipes[0].versions[0].title);
    // $scope.edit_model.title = $scope.recipes[0].versions[0].title;

    



	$scope.addRecipe = function(index) {
		$scope.recipes.push({
			versions : [
				{	
					title: $scope.model[index].title,
					description: $scope.model[index].description,
					createTime: new Date()
				}
			]
		});
		$scope.model = [];
		localStorage.setItem('recipes', JSON.stringify($scope.recipes));
	};
	
	$scope.removeRecipe = function (index) {
		$scope.recipes.splice(index, 1);
		localStorage.setItem('recipes', JSON.stringify($scope.recipes));
	};

	$scope.select= function(index) {
       $scope.active = index;
    };

	$scope.editRecipe = function(index){
		$scope.recipes[index].versions.push({
			title: $scope.model[index].edit_model[0].title,
			description: $scope.model[index].edit_model[0].description,
			createTime: new Date()
		});
		localStorage.setItem('recipes', JSON.stringify($scope.recipes));
		console.log($scope.recipes);
	};
	$scope.edit = function(index){
		for(var i = 0; i < $scope.recipes.length; i++){
			$scope.model.push({
				edit_model: []
			});
			$scope.last_version = $scope.recipes[i].versions.length - 1;
			for(var k = 0; k < $scope.model.length; k++){
				$scope.model[k].edit_model.push({
					title: $scope.recipes[i].versions[$scope.last_version].title,
					description: $scope.recipes[i].versions[$scope.last_version].description,
				});
	    	}
	    }
	};
}
