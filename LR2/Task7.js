var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(edition, title, year) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + "(" + this.year + ").");
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year + ".");
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia(424155, "'Life is hard'", 2003);
refBook.printItem();
refBook.printCitation();
