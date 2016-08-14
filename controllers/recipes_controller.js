angular.module('recipeApp').controller('RecipesController', RecipesCtrl);
 
RecipesCtrl.$inject = ['$scope'];
function RecipesCtrl($scope) {

	$scope.active = 0;
	$scope.saved = localStorage.getItem('recipes');
	$scope.recipes = (localStorage.getItem('recipes')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('recipes', JSON.stringify($scope.recipes));
	$scope.addIngredient = newIngredient;   
    $scope.model = [];
    $scope.model.ingredients = [];
    // $scope.add;

    ($scope.init = function (){
        newIngredient();
    })();

    function newIngredient() {
        $scope.model.ingredients.push({});
    }
    // init();

	$scope.addRecipe = function() {
		$scope.recipes.push({
			versions : [
				{	
					version: 1,
					title: $scope.model.title,
					description: $scope.model.description,
					ingredients: $scope.model.ingredients,
					createTime: new Date()
				}
			]
		});
		$scope.model = '';
		$scope.model.ingredients = [];
		localStorage.setItem('recipes', JSON.stringify($scope.recipes));
	};
	

	 

	// $scope.addVersion = function() {
	// 	var version = 1;
	// 	angular.forEach($scope.recipes, function(recipe){
	// 		version+= recipe.done ? 0 : 1;
	// 	});
	// 	return version;
	// };

	$scope.removerecipe = function (index) {
		$scope.recipes.splice(index, 1);
		localStorage.setItem('recipes', JSON.stringify($scope.recipes));
	};

	$scope.select= function(index) {
       $scope.active = index;
    };



	$scope.toggleEditMode = function(index){
		angular.element(event.currentTarget.closest('.recipe_detail')).toggleClass('editing');
	};

	for(var i = 0; i < $scope.recipes.length; i++){
		$scope.currentVersion = $scope.recipes[i].versions[length].version;
	}
	
	$scope.editOnEnter = function(recipe){
		if(event.keyCode == 13){
			$scope.recipes[0].versions.push({
				version: ++$scope.currentVersion,
				title: $scope.model.title,
				description: $scope.model.description,
				ingredients: $scope.model.ingredients,
				createTime: new Date()
			});
			console.log($scope.recipes[0].versions);
			$scope.model = '';
			$scope.model.ingredients = [];
			localStorage.setItem('recipes', JSON.stringify($scope.recipes));
		}
	};



// 	$scope.addNew = function(){
// 		$scope.add = true;
// 		console.log($scope.add);
// 	}
// // console.log($scope.add);
}
// $rootScope.xmlData.create_time = Date(data.data.create_time);