(function () {
	
	'use strict';
	
	angular.module('app1', [])
	.controller('controller1', function($scope) {
		
	//	$scope.content1 = "";
		$scope.QuantityScale = "Please enter data first";
		$scope.clickedFunc = function () {
			
			var splitedContent = $scope.content1.split(",");
			if (splitedContent.length <= 3) {
				$scope.QuantityScale = "Enjoy!";
			} else if (splitedContent.length > 4 ) {
				$scope.QuantityScale = "Too Much!";
			} else
				{
					$scope.QuantityScale = "Please enter data first";
				}
			
		};
		
	});
	
	
	
	
})();