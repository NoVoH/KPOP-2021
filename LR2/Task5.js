var ReferenceItem = /** @class */ (function () {
    /*constructor(title_r: string, year_r: number){
        console.log('Creating a new ReferenceItem ...');
        this.title = title_r;
        this.year = year_r;
    }*/
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    ReferenceItem.prototype.getter = function () {
        console.log(this._publisher.toLocaleUpperCase());
    };
    ReferenceItem.prototype.setter = function (publisher) {
        this._publisher = publisher;
    };
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ". Depatment: " + ReferenceItem.department);
    };
    ReferenceItem.department = "Saratov";
    return ReferenceItem;
}());
var ref = new ReferenceItem("'Life is hard'", 2003);
ref.setter("Mahmud");
ref.printItem();
ref.getter();
