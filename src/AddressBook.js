function AddressBook () {
	//add a new property to the class called contacts as an empty array
	this.contacts = [];

}

//Write a new function called addContact that accepts a
//contact as a parameter and just pushes that contact on to this
//array

AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
}
//return the element of the array with that index
AddressBook.prototype.getContact = function(index){
	return this.contacts[index];
}
//use the splice method of an array to remove the element
AddressBook.prototype.deleteContact = function(index) {
	this.contacts.splice(index, 1);
};