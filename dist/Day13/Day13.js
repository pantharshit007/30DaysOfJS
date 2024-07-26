"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importStar(require("./util"));
const random = __importStar(require("./module"));
const lodash_1 = __importDefault(require("lodash"));
const axios_1 = __importDefault(require("axios"));
// Day 13: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197208
// Activity 1: Creating and Exporting Modules
// • Task 1.  Create a module that exports a function to add two numbers. Import and use this module in another script.
// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
// Activity 2: Named and Default Exports
// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
// Activity 3: Importing Entire Modules
// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.
// • Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// task1:
function task1() {
    console.log("> task1:", (0, util_1.addNum)(2, 3));
}
task1();
// task2:
function task2() {
    const person = (0, util_1.obj)("random billi", 21);
    console.log("> task2:", person.method1());
}
task2();
// task3:
function task3() {
    console.log("> task3:", (0, util_1.addNum)(2, 3), (0, util_1.subNum)(2, 3));
}
task3();
// task4:
function task4() {
    console.log("> task4:", (0, util_1.default)(5));
}
task4();
// task5:
function task5() {
    const radius = 5;
    const area = random.calculateAreaOfCircle(radius);
    const circumference = random.calculateCircumference(radius);
    console.log("> task5:", area, circumference);
}
task5();
// task6:
function task6() {
    const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
    const sorted = lodash_1.default.sortBy(numbers);
    console.log("> task6:", sorted);
}
task6();
// task7:
function task7() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.get("https://jsonplaceholder.typicode.com/todos/1");
            if (res.status !== 200)
                throw new Error(res.statusText);
            console.log("> task7:", res.data);
        }
        catch (error) {
            console.log("> task7:", error.message);
        }
    });
}
task7();
// task8:
function task8() {
    console.log("> task8: ");
    console.log("npm install --save-dev parcel");
    console.log("update package.json");
    console.log("npm run build");
    console.log("Check dist/Day13");
}
task8();
