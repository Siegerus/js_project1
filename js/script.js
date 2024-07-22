
"use sttrict"

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};

for (let i = 0; i < 2; i++) {       // цикл, что бы задать вопросы 2 раза
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50) { // если полученныые данные строка и переменные не нал, и длинна строки не больше 50 - то ---
        console.log("done");
        appData.expenses[a] = b;       // устанавливаем св-ва для объекта. Получится пара ключ-значение
    } else {
        console.log ("bad result");
        i--;
        }
    };

let q = 0;
while (q < 2) {
    let a = prompt("second Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("second Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("second done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        q--;
    }
    q++
};

let w = 0;
do {
    let a = prompt("third Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("third Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("third done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        w--;
    }
    w++
}
while (w < 2);

appData.moneyPerDay = appData.budget / 30; // создаём новое св-во для объекта

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log ("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

/* console.log(appData.expenses); */
