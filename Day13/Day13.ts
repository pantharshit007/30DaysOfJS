import areaOfCircle, { addNum, obj, subNum } from "./util";
import * as random from "./module";
import lodash from "lodash";
import axios from "axios";

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
  console.log("> task1:", addNum(2, 3));
}
task1();

// task2:
function task2() {
  const person = obj("random billi", 21);
  console.log("> task2:", person.method1());
}
task2();

// task3:
function task3() {
  console.log("> task3:", addNum(2, 3), subNum(2, 3));
}
task3();

// task4:
function task4() {
  console.log("> task4:", areaOfCircle(5));
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
  const sorted = lodash.sortBy(numbers);
  console.log("> task6:", sorted);
}
task6();

// task7:
async function task7() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    if (res.status !== 200) throw new Error(res.statusText);
    console.log("> task7:", res.data);
  } catch (error) {
    console.log("> task7:", (error as Error).message);
  }
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

export {};
