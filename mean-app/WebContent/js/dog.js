//new Dog(response['name'],response['did'],response['email'],response['breed'],response['description'],response['photo']);
//this.name=
//every function is an object
function Dog(name,did,email,breed,description,photo) {
	this.name=name;
	this.did=did;
	this.email=email;
	this.breed=breed;
	this.description=description;
	this.photo=photo;
	this.run=function(){
		console.log("dog run after you!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	};
}

Dog.prototype.bark=function(){
	 console.log("I will bite you!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
};