"use strict"
evariable.service("nameService", function($http) {
	var empvar=this;
	empvar.data={};
	this.findEmployeeDetails=function(email){
		$http.get("http://localhost:8080/spring-app-mobile/mobile/employeeDetail?email"+email).success(function(response) {
			empvar.data=response;
		}).error(function(data, status, headers, config) {
			empvar.data=response;
		})
	};
})