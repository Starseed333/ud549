//test suite
describe("Address Book", function() {
    var addressBook,
        thisContact;
    //instantiate a new address book object in spec
    //new contact object
    //place instantiation in the beforeEach function which will run beforeEach of the tests
    //within the test suite
    beforeEach(function(){
      addressBook = new AddressBook();
      thisContact = new Contact();
    })


  it("should be able to add a Contact", function() {
    //addContact method
    addressBook.addContact(thisContact);
    //I should expect that if I were to get the first contact in my
    //address book that this would be the same as this contact
    //getContact method
    expect(addressBook.getContact(0)).toBe(thisContact);

  });

    it("should be able to delete a Contact", function() {
    //instantiate a new address book object in spec
    var addressBook = new AddressBook();
    //new contact object
        thisContact = new Contact();
        //addContact method
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();

  });

});

describe("Async Address Book", function(){
  it("should grab initial contacts", function(){
    var addressBook = new AddressBook();

    addressBook.getInitialContacts(function(){
      expect(addressBook.initialComplete).toBe(true);
    });
  });
});