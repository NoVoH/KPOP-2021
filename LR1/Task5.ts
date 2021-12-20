enum Category{Business_analyst, Developer, Desiger, QA, Scrum_master}
function getAllworkers() {
    let workers = [
    {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst},
    {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Desiger},
    {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer},
    {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA}
    ]
    return workers;
}

function WorkersNamesByCategory(workers, Cat_num: Category = Category.Desiger): void{
    let surnames: string[] = ['0'];
    for(let worker of workers){
        if(Cat_num === worker.category){
            surnames.push(worker.surname)
        }
    }
    surnames.shift()
    for(let surname of surnames){
        console.log(surname)
    }
}

function logFirstAvailable(workers = getAllworkers()): void{
    let workers_num: number = workers.length
    console.log(workers_num)

    for(let worker of workers) {
        if(worker.available == true){
            let worker_name: string = `${worker.Name} ${worker.surname}`
            console.log(worker_name)
        }
    }

}

function createCustomer(name: string, age?: number, city?: string){
    if(age && city){
        console.log(`${name} ${age} ${city}`)
    }
    else if(age){
        console.log(`${name} ${age}`)
    }
    else{
        console.log(`${name}`)
    }

}

function getWorkerByID(ID, workers): string{
    let ans = workers.find(worker =>{
        if(worker.id === ID && worker.available === true){
            return(worker);
        }
        else{
            return(false); 
        }
    })
    if(!ans){
        
    }
    else{
        return(ans.Name + ' ' + ans.surname);
    }       
}

function checkoutWorkers(customer: string, ...workerIDs: number[]){
    let worker_s = getAllworkers();
    let workers_available: string[] = ['0'];
        for(let id of workerIDs){
            workers_available.push(getWorkerByID(id,worker_s));
    }
    workers_available.shift();
    console.log('Customer: ' + customer);
    return(workers_available);
}

const workers = getAllworkers()
createCustomer('Igor');
createCustomer('Igor', 23);
createCustomer('Igor', 23, 'Anapa')
WorkersNamesByCategory(workers)
logFirstAvailable();
let myWorkers: string[];
myWorkers = checkoutWorkers('Ann', 1, 2, 4);
console.log(myWorkers);