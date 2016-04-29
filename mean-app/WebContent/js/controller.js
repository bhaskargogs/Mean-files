//this controller is taking two parameter , first parameter name of the controller and second parameter is function definition;
//AngularJS supports dependency injection also
harish.controller("checkNameController",function($scope,$http,DogService){
	$scope.nname="Mr. India!!";
	$scope.pname="Ohhh I have really understand now!!!!!!!!!!!!!!"
	//checkName is variable which holds the function definition
	//in java script every function is a object
	//Here we have define function as an expression
	$scope.checkName=function(){
		 // alert($scope.nname+"  I like you!!!!!!!!!!!!!!!!!!!!");
		  //URL . method , Context Type ,Accept
		DogService.findDogDetail($scope.nname);
		var response=DogService.data;
		  if (angular.isUndefined(response.email)){
			   $scope.datashow=false;
		   }else{
			   //$scope.dog=response;
			   $scope.dog=new Dog(response['name'],response['did'],response['email'],response['breed'],response['description'],response['photo']);
			   $scope.dog.bark();
			   $scope.datashow=true;
			   return response;
		   }
		
	};
	console.log($scope.checkName);
});