interface Person{
    name: string;
    email: string;
}


interface Librarian extends Person{
    department: string;
    assistCustomer(custName: string):void;
}

class UniversityLibrarian implements Librarian{
    name: "Victor Bykov"
    email: "victor333@gmail.com"
    department: "FIT"
    assistCustomer(custName:string): void{
        console.log(`${this.name} is assisting ${custName}`)
    }
}
let favoriteLibrarian: Librarian;
favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Victor Zhukov"
favoriteLibrarian.assistCustomer("Vitaliy")