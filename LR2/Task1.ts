enum Category{Business_analyst = 12000, Developer = 11000, Desiger= 9000, QA = 8000, Scrum_master = 10000}
interface Worker1 {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
}

function getAllworkers() {
    let workers: Worker1[] = [
    {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Business_analyst},
    {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Desiger},
    {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Developer},
    {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.QA}
    ]
    return workers;
}

function getWorkerByID(ID, workers): Worker1{
    let ans = workers.find(worker => (worker.id === ID));
    return(ans);
}

function PrintWorker(worker:Worker1 | undefined){
    if(typeof worker === "undefined")
    {
        console.log("ID is not found")
    }
    else
    {
        console.log(worker.name + ' ' + worker.surname + ' got salary ' + worker.salary)
    }
}

let workers = getAllworkers();
let ID = 1;
let di = getWorkerByID(ID, workers);
PrintWorker(di);