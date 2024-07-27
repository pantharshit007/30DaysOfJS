"use strict";
// Day 15: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197231
Object.defineProperty(exports, "__esModule", { value: true });
// Activity 1: Understanding Closures
// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
// Activity 2: Practical Closures
// • Task 3:
// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
// • Task 4.
// • Create a closure that captures a user's name and returns a function that greets the user by name.
// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
// Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// • Task 8: Create a memoized version of a function that calculates the factorial of a number.
// task1:
function task1(num) {
    return function innerFunc() {
        console.log("> task1 innerFunc:", num);
    };
}
const inner = task1(5);
inner();
// task2:
function task2() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        },
    };
}
const incr = task2();
incr.increment();
incr.increment();
console.log("> task2:", incr.getCount());
// task3:
function task3() {
    let uId;
    let lastId;
    return {
        generate: function () {
            uId = crypto.randomUUID();
            lastId = uId;
            return uId;
        },
        lastUpdate: function () {
            return lastId;
        },
    };
}
const instance = task3();
instance.generate();
console.log("> task3:", instance.lastUpdate());
instance.generate();
console.log("> task3:", instance.lastUpdate());
// task4:
function task4(name) {
    let newName = name;
    return {
        greetings: function () {
            return "Hello " + newName;
        },
    };
}
const name = task4("random billi");
console.log("> task4:", name.greetings());
// task5:
function task5() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(((idx) => {
            return function () {
                console.log("index " + idx);
            };
        })(i));
    }
    return arr;
}
const funcArray = task5();
funcArray.forEach((func, index) => {
    console.log(`> task5: Function at index ${index}`);
    //func(); // Each function should log its index
});
// task6:
function task6() {
    let items = ["Shoes", "Shirt", "comb"];
    return {
        add: function (item) {
            return items.push(item);
        },
        remove: function (item) {
            if (item && items.includes(item)) {
                const index = items.indexOf(item);
                items.splice(index, 1);
            }
            else {
                items.pop();
            }
            return items;
        },
        list: function () {
            return items;
        },
    };
}
const item = task6();
console.log("> task6:", item.list());
item.add("rubber");
item.add("ball");
console.log("> task6:", item.list());
item.remove("rubber");
console.log(item.remove("Shoes"));
console.log("> task6:", item.list());
// task7:
function task7(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        else {
            const res = fn(...args);
            cache[key] = res;
            return res;
        }
    };
}
function multiply(num1, num2) {
    return num1 * num2;
}
const memo = task7(multiply);
console.log("> task7:", memo(2, 3));
console.log("> task7:", memo(2, 3));
console.log("> task7:", memo(4, 5));
console.log("> task7:", memo(4, 5));
// task8:
function task8(fn) {
    const cache = {};
    return function (num) {
        if (num in cache) {
            console.log("Memoized");
            return cache[num];
        }
        else {
            const result = fn(num);
            cache[num] = result;
            return result;
        }
    };
}
function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
const fact = task8(factorial);
console.log("> task8:", fact(3));
console.log("> task8:", fact(3));
console.log("> task8:", fact(5));
console.log("> task8:", fact(5));
console.log("> task8:", fact(10));
