enum Category{Business_analyst = 12000, Developer = 11000, Desiger= 9000, QA = 8000, Scrum_master = 10000}

interface PrizeLogger{
    prize: string;
}

interface Worker1 {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
    markPrize: PrizeLogger; 
}

function printer(a:Worker1){
    console.log(a.markPrize);
}
let logPrize: Worker1 = {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Business_analyst, markPrize: {prize: "Life is Hard"}};
printer(logPrize);