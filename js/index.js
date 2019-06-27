(function() {

  var app = angular.module('myCalc', []);

  app.controller('CalculatorController', ['$scope', function($scope) {

    $scope.tax_options = [0.0, 0.06, 0.08, 0.10];
    $scope.current_tax = 0.0;
    $scope.current_number = 1;
	$scope.frogprince = 12.5;
	$scope.hanselgretel = 14.5;  
 	$scope.rapunzel = 16.5;
	$scope.travellingmusician = 18.5;  
   
	  $scope.calculate = function() {

      $scope.fp_price = ($scope.current_number * (1+$scope.current_tax) * $scope.frogprince).toFixed(2);
      $scope.hg_price = ($scope.current_number * (1+$scope.current_tax) * $scope.hanselgretel).toFixed(2);
      $scope.rp_price = ($scope.current_number * (1+$scope.current_tax) * $scope.rapunzel).toFixed(2);
      $scope.tm_price = ($scope.current_number * (1+$scope.current_tax) * $scope.travellingmusician).toFixed(2);

      if ($scope.fp_price > 75) {
        $scope.fp_price = (0.9*$scope.fp_price).toFixed(2);
      }
		  
      if ($scope.hg_price > 75) {
        $scope.hg_price = (0.9*$scope.hg_price).toFixed(2);
      }

	  if ($scope.rp_price > 75) {
        $scope.rp_price = (0.9*$scope.rp_price).toFixed(2);
      }
		  
	  if ($scope.tm_price > 75) {
        $scope.tm_price = (0.9*$scope.tm_price).toFixed(2);
      }
      

    };

    $scope.calculate();

  }]);

})();