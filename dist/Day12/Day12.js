"use strict";
// Day 12: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197
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
// task1:
function task1(age) {
    try {
        if (age < 18) {
            throw new Error("You are not eligible");
        }
        console.log("> task1 passed: " + age);
    }
    catch (err) {
        console.error("> task1 failed:", err.message);
    }
}
task1(16);
// task2:
function task2(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Denominator cannot be zero");
        }
        const res = num1 / num2;
        console.log("> task2 passed:", res);
    }
    catch (err) {
        console.error("> task2 failed:", err.message);
    }
}
// task3:
function task3() {
    try {
        task2(5, 4);
        task2(5, 0);
        console.log("> task3 passed");
    }
    catch (err) {
        console.error("> task3 failed:", err.message);
    }
    finally {
        console.log("> task3 finished");
    }
}
task3();
// task4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "customError";
    }
}
function task4(num) {
    try {
        if (num < 0) {
            throw new CustomError("Number must be greater than zero");
        }
        else if (num <= 0) {
            throw new Error("No. must be >= 0");
        }
        console.log(`> task4 passed: ${num}`);
    }
    catch (err) {
        if (err instanceof CustomError) {
            console.log(`> task4 Custom Error Caught: ${err.message}`);
        }
        else {
            console.log(`> task4 Error: ${err.message}`);
        }
    }
}
task4(1);
task4(0);
task4(-1);
// task5:
function task5(str) {
    try {
        if (str.length <= 0) {
            throw new Error("string cannot be empty");
        }
        console.log("> task5 passed: " + str);
    }
    catch (err) {
        console.error("> task5 failed: " + err.message);
    }
}
task5("random billi");
task5("");
// task6:
function task6() {
    const num = Math.floor(Math.random() * 6);
    const prom = new Promise((resolve, reject) => {
        if (num > 3) {
            return resolve(num);
        }
        else {
            return reject("less than 3");
        }
    });
    prom
        .then((resolve) => console.log("> task6 passed: ", resolve))
        .catch((err) => console.error("> task6 failed:", err));
}
task6();
// task7:
function task7() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const num = Math.floor(Math.random() * 6);
            const prom = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (num > 3) {
                        return resolve(num);
                    }
                    else {
                        return reject("less than 3: " + num);
                    }
                }, 500);
            });
            const res = yield prom;
            console.log("> task7 passed:", res);
        }
        catch (err) {
            console.error("> task7 failed:", err);
        }
    });
}
task7();
// task8:
function task8() {
    fetch("https://fakestoreapi.com/product")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error("> task8 failed:", err.message));
}
task8();
// task9:
function task9() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("https://fakestoreapi.com/product");
            if (!res.ok)
                throw new Error(res.statusText);
            console.log(res);
        }
        catch (err) {
            console.error("> task9 failed:", err.message);
        }
    });
}
task9();
