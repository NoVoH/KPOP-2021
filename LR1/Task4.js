function createCustomerID(name, ID) {
    return (name + ' ' + ID);
}
var myID;
myID = createCustomerID('Ann', 10);
console.log(myID);
var IdGenerator = function (name, ID) { return (name + ' ' + ID); };
console.log(IdGenerator('John', 24));
