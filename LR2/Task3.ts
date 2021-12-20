interface Person{
    name: string;
    email: string;
}

interface Author extends Person{
    numBooksPublishe: number;
}

interface Librarian extends Person{
    department: string;
    assistCustomer(custName: string):void;
}

let favoriteAuthor: Author = {name: "Dostoevsky", email: "Idiot kakoy email. On umer v 1881", numBooksPublishe: 37};
let favoriteLibrarian: Librarian = {name:"Galya", email: "Galya228@gmail.com", department: "Klounskoye uchilishche", assistCustomer:function (custName: string) {console.log(custName + " keep quiet please");}}
console.log(favoriteAuthor);
console.log(favoriteLibrarian);
favoriteLibrarian.assistCustomer("Vitaliy")