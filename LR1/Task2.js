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
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Desiger },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}
function WorkersNamesByCategory(Cat_num, workers) {
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
function logWorkersNames(Names) {
    for (var _i = 0, Names_1 = Names; _i < Names_1.length; _i++) {
        var name_1 = Names_1[_i];
        console.log(name_1);
    }
}
var workers = getAllworkers();
var Cat_num = Category.Business_analyst;
WorkersNamesByCategory(Cat_num, workers);
var Names = ['Ivan', 'Petro', 'Vasyl', 'Evgen'];
logWorkersNames(Names);
