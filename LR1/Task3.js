var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Desiger"] = 2] = "Desiger";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Desiger },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}
function getWorkerByID(ID, workers) {
    var ans = workers.find(function (worker) {
        if (worker.id === ID) {
            return (worker);
        }
        else {
            return (false);
        }
    });
    if (!ans) {
        return ('No such ID was found');
    }
    else {
        return (ans.Name + ' ' + ans.surname + ' ' + ans.salary);
    }
}
var workers = getAllworkers();
workers.forEach(function (worker) {
    if (worker.category === Category.Developer) {
        console.log(worker.Name + ' ' + worker.surname);
    }
});
var ID = 1;
var ans;
ans = getWorkerByID(ID, workers);
console.log(ans);
