"use strict"
cardetail.service("carService", function($http) {
	var carvm = this;
	carvm.data={};
	this.findCarDetails=function(cid){
		$http.get("http://localhost:8080/spring-app-mobile/mobile/carDetails?cid="+cid).success(function(response) {
			carvm.data=response;
		}).error(function(data, status, headers, config) {
			carvm.data=response;
		})
	}
})