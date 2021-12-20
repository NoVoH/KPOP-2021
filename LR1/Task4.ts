function createCustomerID(name: string, ID: number): string{
    return(name + ' ' + ID);
}

let myID:string;
myID = createCustomerID('Ann', 10);
console.log(myID);
let IdGenerator: (name: string, ID: number) => string = function(name: string, ID: number): string { return(name + ' ' + ID); };
console.log(IdGenerator('John', 24))