// Day 1: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3196994

// Task1:
var number;
number = 2;
console.log(number);

// Task2:
let string;
string = "hello"
console.log(string);

// Task3:
const isMale = true;
console.log(isMale);

// Task4:
const value = 2;
const stringValue = "world"
const booleanValue = true
const objectValue = { 1: "one", 2: "two" }
// const arrayValue = [1, 2, 3, 4]
const arrayValue = new Array([1, 2, 3, 4]);
console.log(typeof (value), typeof (stringValue), typeof (booleanValue), typeof (objectValue), typeof (arrayValue));

// Task5:
let initialValue = 10;
console.log("initialValue: ", initialValue);
initialValue = 10.69
console.log("finalValue: ", initialValue);

// Task6:
try {
    const values = 2;
    console.log(values = 3);
} catch (err) {
    console.error(err.message);
}

