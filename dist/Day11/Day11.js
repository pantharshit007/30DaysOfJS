"use strict";
// Day 11: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197191
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using . catch() .
// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Activity 3: Using Async/Await
// • Task 4:
// Write an async function that waits for a promise to resolve and then logs the resolved value.
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// Activity 4: Fetching Data from an API
// • Task 6.
// • Use the fetch API to get data from a public API and log the response data to the console using promises.
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// Activity 5: Concurrent Promises
// • Task 8.
// • Use Promise.all to wait for multiple promises to resolve and then log all their values.
// • Task 9:
// Use Promise.race to log the value of the first promise that resolves among multiple promises.
//task1:
const task1 = (value) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (value > 18) {
                resolve("promise resolved");
            }
            else {
                reject("Promise rejected");
            }
        }, 2000);
    });
};
task1(19)
    .then((resolveValue) => console.log("task1", resolveValue))
    .catch((rejectValue) => console.log(rejectValue));
// task2:
task1(17)
    .then((resolveValue) => console.log(resolveValue))
    .catch((rejectValue) => console.log("task2:", rejectValue));
// task3:
function task3(url) {
    return fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .catch((err) => console.log(err));
}
task3("https://catfact.ninja/fact")
    .then((data) => {
    console.log("First fetch:", data.fact);
    return task3("https://catfact.ninja/fact");
})
    .then((data) => {
    console.log("second fetch:", data.fact);
    return task3("https://catfact.ninja/fact");
})
    .then((data) => {
    console.log("third fetch:", data.fact);
    return task3("https://catfact.ninja/fact");
})
    .catch((err) => {
    console.error("There was a problem with the fetch operation:", err);
});
// task4
function task4(val) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const value = yield task1(val);
            console.log("task4", value);
        }
        catch (err) {
            console.log("task5", err);
        }
    });
}
task4(20);
// task5
task4(10);
// task6:
function task6() {
    return fetch("https://catfact.ninja/fact")
        .then((response) => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    })
        .catch((err) => console.log(err));
}
task6().then((response) => console.log("task6", response.fact));
// task7:
function task7() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://catfact.ninja/fact");
        const data = yield res.json();
        console.log("task7", data.fact);
    });
}
task7();
// task8:
function task8() {
    const promise1 = Promise.resolve(3);
    const promise2 = 4;
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "foo");
    });
    Promise.all([promise1, promise2, promise3]).then((val) => console.log(val));
}
task8();
// task9:
function task9() {
    const p1 = new Promise((resolve) => {
        setTimeout(resolve, 2000, "foo1");
    });
    const p2 = new Promise((resolve) => {
        setTimeout(resolve, 3000, "foo2");
    });
    const p3 = new Promise((resolve, reject) => {
        setTimeout(reject, 1000, "foo3");
    });
    Promise.race([p1, p2, p3])
        .then((val) => console.log("task9 Passed:", val))
        .catch((err) => console.log("task9 Failed:", err));
}
task9();
