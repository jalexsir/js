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

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Function first");

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 18));

function retVar() {
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);

let calcNew = (a, b) => a + b;

console.log(calcNew(20, 3));

let str = "test";
console.log(str.toUpperCase());

let twelve = "12.2";
console.log(Math.round(twelve));

let six = "6px";
console.log(parseInt(six));

function learnJS(one, two) {
    console.log("Im learning " + one);
    two();
}

learnJS("JavaScript", function () {
    console.log("I have passed 3 lesson");
});

function done() {
    console.log("I have passed 3 lesson function");
}

learnJS("Java", done);

//Objects *****************************
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};
console.log(options);

delete options.bool;

for(let key in options){
    console.log(key + ' ' + options[key]);
}

console.log(Object.keys(options).length);


//Arrays ********************************
let arrS = [1,2,3,4,5];
arrS.pop(); //delete last element
arrS.push("8"); //add element
arrS.shift(); //delete first element
arrS.unshift(12); //add first element

console.log(arrS); 

for(let i =0; i<arrS.length; i++){
    console.log(arrS[i]);
}

arrS.forEach(function(item, i, arrIn){
    console.log(i + ': '+item + " (array: "+ arrIn + ")");
});

for(let key of arrS){
    console.log(key);
}

//let ans = prompt(""),
//    arrAns = [];
//    arrAns = ans.split(',');

let arrNum = [1,15,4];
    arrNum.sort(compareNum);

    console.log(arrNum);
function compareNum(a,b){
    return a-b;
}

//OOP Objects ****************************
let soldier = {
    health: 400,
    armor: 100
};

let John = {
    health: 200
};

John.__proto__ = soldier;

console.log(John);
console.log(John.armor);