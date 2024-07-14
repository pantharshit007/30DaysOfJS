// Day 2: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197073

// task1:
function addNum(a: number, b: number) {
  console.log("> sum:", a + b);
}
addNum(1, 2);
console.log("---------------------------------");

// task2:
function subtractNum(a: number, b: number) {
  console.log("> sub:", a - b);
}
subtractNum(1, 3);
console.log("---------------------------------");

// tast3:
function multiply(a: number, b: number) {
  console.log("> multiply:", a * b);
}
multiply(3, 2);
console.log("---------------------------------");

// task4:
function divide(a: number, b: number) {
  console.log("> divide:", a / b);
}
divide(5, 2);
console.log("---------------------------------");

// task5:
function remainder(a: number, b: number) {
  console.log("> remainder:", a % b);
}
remainder(5, 2);
console.log("---------------------------------");

// task6:
function addOperator(a: number, b: number) {
  a += b;
  console.log("> addOperator:", a);
}
addOperator(3, 2);
console.log("---------------------------------");

// task7:
function subtractOperator(a: number, b: number) {
  a -= b;
  console.log("> subtractOperator:", a);
}
subtractOperator(3, 2);
console.log("---------------------------------");

// task8:
function compareOperators(a: number, b: number) {
  a > b ? console.log("a > b", a) : console.log("a < b", b);
}
compareOperators(3, 2);
console.log("---------------------------------");

// task9:
function compareEqualOperators(a: number, b: number) {
  a >= b ? console.log("a >= b", a) : console.log("a < b", b);
}
compareEqualOperators(3, 3);
compareEqualOperators(3, 5);
console.log("---------------------------------");

// task10:
function equality(a: number | string, b: number | string) {
  if (a == b) console.log("a == b", a, b);
  else console.log("a != b", a, b);

  if (a === b) console.log("a === b", a, b);
  else console.log("a !== b", a, b);
}
equality("2", 2);
console.log("---------------------------------");

// task11:
function andOperator(a: any, b: any) {
  if (a && b) console.log("both is true", a, b);
  else console.log("one is false", a, b);
}
andOperator(true, false);
andOperator(0, 1);
andOperator(1, []);
andOperator("", []);
console.log("---------------------------------");

// task12:
function orOperator(a: any, b: any) {
  if (a || b) console.log("one is true", a, b);
  else console.log("both is false", a, b);
}
orOperator(true, false);
orOperator(0, 1);
orOperator(1, []);
orOperator("", null);
console.log("---------------------------------");

// task13:
function notOperator(a: boolean | number) {
  if (!a) console.log("condition is true", a);
  else console.log("condition is false", a);
}
notOperator(true);
notOperator(false);
console.log("---------------------------------");

// task14:
function ternaryOperator(a: number) {
  a >= 0 ? console.log("a is +ve: ", a) : console.log("a is -ve: ", a);
}
ternaryOperator(1.5);
ternaryOperator(-1.5);
