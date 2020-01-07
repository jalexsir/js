'use strict';
var leftBorderWidth = 1;
let second = 2;
const pi = 3.12;
let person = {
    name: "John",
    age: 25,
    isMarried: false
}
console.log(person.age);
//alert('Hello world');
let answer = confirm("Are you here?");
console.log(answer);
let secondAnswer = prompt("Есть ли Вам 18?", "Да");
//console.log(secondAnswer);
console.log("Type =" + typeof (secondAnswer));
console.log("2" === 2);
console.log("Hi");

if (2 * 4 == 8) {
    console.log("True");
} else {
    console.log("False");
}

(1 == 2) ? console.log("yes"): console.log("not");
let num = 40;
switch (num) {
    case num < 50:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case 60:
        console.log("Верно");
        break;
    default:
        console.log("Hel");
}

let numa = 50;
while (numa < 55) {
    console.log(numa);
    num++;
}

do {
    console.log(numa);
    numa++;
} while (numa < 60);

/*for (let i = 1; i < 8; i++) {
    console.log(i);
}*/