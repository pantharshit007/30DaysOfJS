"use strict";
// Day 5: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197105
Object.defineProperty(exports, "__esModule", { value: true });
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
// • Task 2: Write a function to calculate the square of a number and return the result.
// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
// • Task 4: Write a function expression to concatenate two strings and return the result.
// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const task1 = (n) => {
    if (n % 2 === 0)
        console.log("even: ", n);
    else
        console.log("odd: ", n);
};
task1(2);
task1(3);
function task2(n) {
    console.log("sq: ", n * n);
}
task2(5);
function task3(n, m) {
    console.log("max: ", Math.max(n, m));
}
task3(5, 6);
function task4(n, m) {
    const str = [n, m].join("-");
    console.log("Concatenated:", str);
}
task4("stupid", "code");
const task5 = (n, m) => {
    console.log("sum:", n + m);
};
task5(6, 5);
const task6 = (str) => {
    const word = "code";
    if (str.includes(word))
        console.log("Found word:", str);
    else
        console.log("No word found:", str);
};
task6("chaicode");
task6("none");
function task7(n, m = 0) {
    console.log("task7:", n * m);
}
task7(4, 5);
task7(4);
function task8(name, age = 20) {
    console.log("Hello user " + name + " of " + age + " years old");
}
task8("Jetha", 40);
task8("Babita ji");
function task9(func, num) {
    return (name, age) => {
        while (num > 0) {
            func(name, age);
            num--;
        }
    };
}
const repeatTask8 = task9(task8, 3);
repeatTask8("Lloyd");
function func1(val) {
    return val * val;
}
function func2(val) {
    return val + 10;
}
function task10(func1, func2, value) {
    const res = func1(value);
    const result = func2(res);
    return result;
}
console.log("task10 second func value:", task10(func1, func2, 5));
