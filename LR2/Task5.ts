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
    constructor(public title: string, private year: number){}
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

let ref = new ReferenceItem("'Life is hard'", 2003);
ref.setter("Mahmud");
ref.printItem();
ref.getter();