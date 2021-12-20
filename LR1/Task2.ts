enum Category{Business_analyst, Developer, Desiger, QA, Scrum_master}
function getAllworkers() {
    let workers = [
    {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst},
    {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Desiger},
    {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer},
    {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA}
    ]
    return workers;
}

function WorkersNamesByCategory(Cat_num: Category, workers): void{
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

function logWorkersNames(Names: string[]): void{
    for(let name of Names){
        console.log(name)
    }
}

const workers = getAllworkers();
let Cat_num: Category = Category.Business_analyst;
WorkersNamesByCategory(Cat_num, workers) 
let Names: string[] = ['Ivan', 'Petro', 'Vasyl', 'Evgen'];
logWorkersNames(Names);