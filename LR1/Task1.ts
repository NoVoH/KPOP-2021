function getAllworkers() {
    let workers = [
    {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
    {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
    {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
    {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers;
}

function logFirstAvailable(workers): void{
    let workers_num: number = workers.length
    console.log(workers_num)

    for(let worker of workers) {
        if(worker.available == true){
            let worker_name: string = `${worker.Name} ${worker.surname}`
            console.log(worker_name)
        }
    }

}
const workers = getAllworkers();
logFirstAvailable(workers)
    