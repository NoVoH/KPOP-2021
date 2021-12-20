var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteLibrarian;
favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Victor Zhukov";
favoriteLibrarian.assistCustomer("Vitaliy");
