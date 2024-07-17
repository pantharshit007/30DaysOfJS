"use strict";
// Day4: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197093
Object.defineProperty(exports, "__esModule", { value: true });
function task1() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
task1();
console.log("<<<<<<>>>>>>");
function task2(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n, "x", i, "=", n * i);
    }
}
task2(5);
console.log("<<<<<<>>>>>>");
function task3() {
    let sum = 0;
    let i = 1;
    while (i <= 10) {
        sum += i;
        i++;
    }
    console.log(sum);
}
task3();
console.log("<<<<<<>>>>>>");
function task4() {
    let i = 10;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}
task4();
console.log("<<<<<<>>>>>>");
function task5() {
    let j = 1;
    do {
        console.log(j);
        j += 1;
    } while (j < 6);
}
task5();
console.log("<<<<<<>>>>>>");
function task6(n) {
    let res = 1;
    do {
        res *= n;
        n--;
    } while (n > 0);
    console.log(res);
}
task6(5);
console.log("<<<<<<>>>>>>");
function task7(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n - i; k++) {
            str += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
}
task7(5);
console.log("<<<<<<>>>>>>");
function task8and9() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5)
            continue;
        if (i === 7)
            break;
        console.log(i);
    }
}
task8and9();
