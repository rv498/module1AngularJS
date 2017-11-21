(function () {
	
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);  
		
    LunchCheckController.$inject = ["$scope"];
	
 	function LunchCheckController ($scope) {
		$scope.content1 = "";
		$scope.QuantityScale = "";
		$scope.clickedFunc = function () {
			
			var splitedContent = $scope.content1.split(",");
			if (splitedContent == "") {
				$scope.QuantityScale = "Please enter data first";
			}
			  else if (splitedContent.length <= 3 && splitedContent.length > 0) {
				$scope.QuantityScale = "Enjoy!";
			} else if (splitedContent.length > 3 ) {
				$scope.QuantityScale = "Too Much!";
			}   
		};
		
	}
		
		
		
	 
	
	
	
})();