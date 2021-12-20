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
function WorkersNamesByCategory(workers, Cat_num) {
    if (Cat_num === void 0) { Cat_num = Category.Desiger; }
    var surnames = ['0'];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (Cat_num === worker.category) {
            surnames.push(worker.surname);
        }
    }
    surnames.shift();
    for (var _a = 0, surnames_1 = surnames; _a < surnames_1.length; _a++) {
        var surname = surnames_1[_a];
        console.log(surname);
    }
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    var workers_num = workers.length;
    console.log(workers_num);
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.available == true) {
            var worker_name = worker.Name + " " + worker.surname;
            console.log(worker_name);
        }
    }
}
function createCustomer(name, age, city) {
    if (age && city) {
        console.log(name + " " + age + " " + city);
    }
    else if (age) {
        console.log(name + " " + age);
    }
    else {
        console.log("" + name);
    }
}
function getWorkerByID(ID, workers) {
    var ans = workers.find(function (worker) {
        if (worker.id === ID && worker.available === true) {
            return (worker);
        }
        else {
            return (false);
        }
    });
    if (!ans) {
    }
    else {
        return (ans.Name + ' ' + ans.surname);
    }
}
function checkoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    var worker_s = getAllworkers();
    var workers_available = ['0'];
    for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
        var id = workerIDs_1[_a];
        workers_available.push(getWorkerByID(id, worker_s));
    }
    workers_available.shift();
    console.log('Customer: ' + customer);
    return (workers_available);
}
var workers = getAllworkers();
createCustomer('Igor');
createCustomer('Igor', 23);
createCustomer('Igor', 23, 'Anapa');
WorkersNamesByCategory(workers);
logFirstAvailable();
var myWorkers;
myWorkers = checkoutWorkers('Ann', 1, 2, 4);
console.log(myWorkers);
