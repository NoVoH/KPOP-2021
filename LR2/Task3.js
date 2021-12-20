var favoriteAuthor = { name: "Dostoevsky", email: "Idiot kakoy email. On umer v 1881", numBooksPublishe: 37 };
var favoriteLibrarian = { name: "Galya", email: "Galya228@gmail.com", department: "Klounskoye uchilishche", assistCustomer: function (custName) { console.log(custName + " keep quiet please"); } };
console.log(favoriteAuthor);
console.log(favoriteLibrarian);
favoriteLibrarian.assistCustomer("Vitaliy");
