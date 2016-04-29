cardetail.controller("carController", function($scope,$http,carService) {
	$scope.checkSerial = function() {
		carService.findCarDetails($scope.csno);
		var response = carService.data;
		if(angular.isUndefined(response.cid)){
			$scope.datashow=false;
		}else{
			$scope.cardetail = new Car(response['cid'],response['name'], response['model'], response['vendor'], response['engine'], response['photo']);
			$scope.datashow=true;
		}
	}
});