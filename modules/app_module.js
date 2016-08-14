// Creates a new module
angular.module('recipeApp', ['ngRoute']);



// load the app
angular.element(document).ready(function() {
    angular.bootstrap(document, ['recipeApp']);
});
