// Day 5: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197105

const task1 = (n: number) => {
  if (n % 2 === 0) console.log("even: ", n);
  else console.log("odd: ", n);
};
task1(2);
task1(3);

function task2(n: number) {
  console.log("sq: ", n * n);
}
task2(5);

function task3(n: number, m: number) {
  console.log("max: ", Math.max(n, m));
}
task3(5, 6);

function task4(n: String, m: String) {
  const str = [n, m].join("-");
  console.log("Concatenated:", str);
}
task4("stupid", "code");

const task5 = (n: number, m: number) => {
  console.log("sum:", n + m);
};
task5(6, 5);

const task6 = (str: String) => {
  const word = "code";
  if (str.includes(word)) console.log("Found word:", str);
  else console.log("No word found:", str);
};
task6("chaicode");
task6("none");

function task7(n: number, m: number = 0) {
  console.log("task7:", n * m);
}
task7(4, 5);
task7(4);

function task8(name: String, age: number = 20) {
  console.log("Hello user " + name + " of " + age + " years old");
}
task8("Jetha", 40);
task8("Babita ji");

interface GreetingFunction {
  (name: string, age?: number): void;
}

function task9(func: GreetingFunction, num: number) {
  return (name: string, age?: number) => {
    while (num > 0) {
      func(name, age);
      num--;
    }
  };
}
const repeatTask8 = task9(task8, 3);
repeatTask8("Lloyd");

interface FuncTypes {
  (num: number): number;
}

function func1(val: number): number {
  return val * val;
}

function func2(val: number): number {
  return val + 10;
}

function task10(func1: FuncTypes, func2: FuncTypes, value: number) {
  const res = func1(value);
  const result = func2(res);
  return result;
}
console.log("task10 second func value:", task10(func1, func2, 5));

export {}; //converting file to ES module
