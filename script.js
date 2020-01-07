'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let question1 = prompt("Введите обязательную статью расходов в этом месяце");
        let question2 = prompt("Во сколько обойдется?");
        if ((typeof (question1)) === 'string' &&
            (typeof (question1)) != null &&
            (typeof (question2) != null) &&
            question1 != '' && question2 != '' && question1.length < 50) {
            console.log("Done " + i);
            appData.expenses[question1] = question2;
        } else {
            console.log("Unknown data, repeat");
            i--;
        }
    }
}

chooseExpenses();


appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровеь достатка");
} else {
    console.log("Произошла ошибка");
}

function checkSaving(){
    if(appData.saving == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSaving();