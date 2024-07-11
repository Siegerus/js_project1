
"use sttrict"

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};

let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
let firstAnswerValue = prompt ("Во сколько обойдется?");
let secondAnswer = prompt("Введите обязательную статью расходов в этом месяце");
let secondAnswerValue = prompt ("Во сколько обойдется?");

appData.expenses[firstAnswer] = firstAnswerValue;
appData.expenses[secondAnswer] = secondAnswerValue;

alert(appData.budget / 30);

console.log(appData);
