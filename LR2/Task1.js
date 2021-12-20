var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 12000] = "Business_analyst";
    Category[Category["Developer"] = 11000] = "Developer";
    Category[Category["Desiger"] = 9000] = "Desiger";
    Category[Category["QA"] = 8000] = "QA";
    Category[Category["Scrum_master"] = 10000] = "Scrum_master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Business_analyst },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Desiger },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Developer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.QA }
    ];
    return workers;
}
function getWorkerByID(ID, workers) {
    var ans = workers.find(function (worker) { return (worker.id === ID); });
    return (ans);
}
function PrintWorker(worker) {
    if (typeof worker === "undefined") {
        console.log("ID is not found");
    }
    else {
        console.log(worker.name + ' ' + worker.surname + ' got salary ' + worker.salary);
    }
}
var workers = getAllworkers();
var ID = 1;
var di = getWorkerByID(ID, workers);
PrintWorker(di);
