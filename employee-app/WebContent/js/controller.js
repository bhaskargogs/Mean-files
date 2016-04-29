evariable.controller("nameDetailsController", function($scope,$http,nameService) {
	$scope.checkEmail=function(){
		nameService.findEmployeeDetails($scope.email);
		var response = nameService.data;
		if (angular.isUndefined(response.email)){
			   $scope.datashow=false;
		   }else{
			   $scope.employee = new Employee(response['eid'],response['name'],response['email'],response['designation'],response['age'],response['photo']);
			   $scope.datashow=true;
			   return response;
		   }
	}
})