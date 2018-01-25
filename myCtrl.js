app.controller("myCtrl", function($scope, myService){

	$scope.urlArray = ['directive.html','directive-2.html'];

	$scope.text = "EVEN MORE GIBBERISH";

	$scope.myFunction = function(){ 
		myService.myServiceFunction();
	};

});