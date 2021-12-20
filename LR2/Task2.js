var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 12000] = "Business_analyst";
    Category[Category["Developer"] = 11000] = "Developer";
    Category[Category["Desiger"] = 9000] = "Desiger";
    Category[Category["QA"] = 8000] = "QA";
    Category[Category["Scrum_master"] = 10000] = "Scrum_master";
})(Category || (Category = {}));
function printer(a) {
    console.log(a.markPrize);
}
var logPrize = { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Business_analyst, markPrize: { prize: "Life is Hard" } };
printer(logPrize);
