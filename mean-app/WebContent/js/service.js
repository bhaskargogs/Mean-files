"use strict"
harish.service("DogService",function($http){
	var vm=this;
	vm.data={};
	this.findDogDetail=function(email) {
		  $http.get("http://localhost:8080/spring-app-mobile/mobile/validateDog?email="+email).success( function(response) {
			   vm.data=response;
		   }).error(function(data, status, headers, config) {
			   vm.data=response;
		      });
	};
});