angular.module('recipeApp').controller('RecipesController', RecipesCtrl);
 
RecipesCtrl.$inject = ['$scope'];
function RecipesCtrl($scope) {

	$scope.active = 0;
	$scope.saved = localStorage.getItem('recipes');
	$scope.recipes = (localStorage.getItem('recipes')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('recipes', JSON.stringify($scope.recipes));
    $scope.model = [];
    $scope.edit_model = [];
    // console.log($scope.recipes[0].versions[0].title);
    // $scope.edit_model.title = $scope.recipes[0].versions[0].title;
    for(var i = 0; i < $scope.recipes.length; i++){
    	for(var k = 0; k < $scope.recipes[i].versions.length; k++){
    		$scope.edit_model.title = $scope.recipes[i].versions[k].title;
    	}
    }



	$scope.addRecipe = function() {
		$scope.recipes.push({
			versions : [
				{	
					title: $scope.model.title,
					description: $scope.model.description,
					createTime: new Date()
				}
			]
		});
		$scope.model = '';
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
			title: $scope.edit_model.title,
			description: $scope.edit_model.description,
			createTime: new Date()
		});
		localStorage.setItem('recipes', JSON.stringify($scope.recipes));
	};

}
