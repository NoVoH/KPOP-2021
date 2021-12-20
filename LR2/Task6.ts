class ReferenceItem{
    //title: string;
    //year: number;
    private _publisher: string;
    static department: string = "Saratov";
    /*constructor(title_r: string, year_r: number){
        console.log('Creating a new ReferenceItem ...');
        this.title = title_r;
        this.year = year_r;
    }*/
    constructor(public title: string, protected year: number){}
    getter() {
        console.log(this._publisher.toLocaleUpperCase())
    }
    setter(publisher:string) {
        this._publisher = publisher
    }
    printItem(){
        console.log(`${this.title} was published in ${this.year}. Depatment: ${ReferenceItem.department}`);
    }
}

class Encyclopedia extends ReferenceItem{
    public edition: number;
    constructor(edition: number, title: string, year: number){
        super(title, year);
        this.edition = edition;
    }
    printItem(){
        super.printItem();
        console.log(`Edition: ${this.edition}(${this.year}).`)
    }
}

let refBook = new Encyclopedia(424155, "'Life is hard'", 2003);
refBook.printItem();