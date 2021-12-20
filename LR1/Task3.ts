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

function getWorkerByID(ID, workers): string{
    let ans = workers.find(worker =>{
        if(worker.id === ID){
            return(worker);
        }
        else{
            return(false); 
        }
    })
    if(!ans){
        return('No such ID was found')
    }
    else{
        return(ans.Name + ' ' + ans.surname + ' ' + ans.salary);
    }       
}

const workers = getAllworkers();
workers.forEach(worker =>{
    if(worker.category === Category.Developer){
        console.log(worker.Name + ' ' + worker.surname);
    }    
});

let ID = 1;
let ans: string;
ans = getWorkerByID(ID, workers);
console.log(ans);