app.directive("myDirective", function(){
	return {
		restrict: 'E',
		scope: {
			myUrl: '=myUrl',
			myText: '=myText'
		},
		//templateUrl: "directive.html"
		template: "<div ng-include='myUrl'></div>"
	};
});
