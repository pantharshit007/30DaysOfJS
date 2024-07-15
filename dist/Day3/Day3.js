"use strict";
// Day 3: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197081
function task1(num) {
    if (num === 0)
        console.log("Zero: " + num);
    else if (num > 0)
        console.log("+ve: " + num);
    else
        console.log("-ve: " + num);
}
task1(0);
task1(1.01);
task1(-1.0);
console.log("--------------------------------");
function task2(age) {
    if (age > 18)
        console.log("Eligible: " + age);
    else
        console.log("not eligible: " + age);
}
task2(19);
console.log("--------------------------------");
function task3(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        console.log("num1 largest: " + num1);
    else if (num2 > num3)
        console.log("num2 largest: " + num2);
    else
        console.log("num3 largest: " + num3);
}
task3(1, 2, 3);
task3(3, 2, 1);
task3(2, 3, 1);
console.log("--------------------------------");
function task4(num) {
    const day = new Date();
    const dayOfWeek = num !== undefined && num !== null ? num : day.getDay();
    switch (dayOfWeek) {
        case 0:
            console.log("Today is Sunday");
            break;
        case 1:
            console.log("Today is Monday");
            break;
        case 2:
            console.log("Today is Tuesday");
            break;
        case 3:
            console.log("Today is Wednesday");
            break;
        case 4:
            console.log("Today is Thursday");
            break;
        case 5:
            console.log("Today is Friday");
            break;
        case 6:
            console.log("Today is Saturday");
            break;
        default:
            console.log("Unknown date");
    }
}
task4(0);
task4();
console.log("--------------------------------");
function task5(score) {
    let grade;
    switch (score > 0) {
        case score >= 8 && score <= 10:
            grade = "A";
            break;
        case score >= 6 && score < 8:
            grade = "B";
            break;
        case score >= 5 && score < 6:
            grade = "C";
            break;
        case score >= 4 && score < 5:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    return grade;
}
console.log("score: 9", task5(9));
console.log("score: 5.5", task5(5.5));
console.log("score: 2", task5(2));
console.log("---------------------------------");
function task6(num) {
    num % 2 == 0 ? console.log("Even:", num) : console.log("odd:", num);
}
task6(15);
task6(17);
console.log("---------------------------------");
function task7(year) {
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
        console.log("Its a leap year:", year);
    }
    else
        console.log("Its not a leap year:", year);
}
task7(2000);
task7(1900);
