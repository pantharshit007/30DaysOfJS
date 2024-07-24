// Day 12: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197

// task1:
function task1(age: number) {
  try {
    if (age < 18) {
      throw new Error("You are not eligible");
    }
    console.log("> task1 passed: " + age);
  } catch (err) {
    console.error("> task1 failed:", (err as Error).message);
  }
}
task1(16);

// task2:
function task2(num1: number, num2: number) {
  try {
    if (num2 === 0) {
      throw new Error("Denominator cannot be zero");
    }
    const res = num1 / num2;
    console.log("> task2 passed:", res);
  } catch (err) {
    console.error("> task2 failed:", (err as Error).message);
  }
}

// task3:
function task3() {
  try {
    task2(5, 4);
    task2(5, 0);
    console.log("> task3 passed");
  } catch (err) {
    console.error("> task3 failed:", (err as Error).message);
  } finally {
    console.log("> task3 finished");
  }
}
task3();

// task4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "customError";
  }
}

function task4(num: number) {
  try {
    if (num < 0) {
      throw new CustomError("Number must be greater than zero");
    } else if (num <= 0) {
      throw new Error("No. must be >= 0");
    }
    console.log(`> task4 passed: ${num}`);
  } catch (err) {
    if (err instanceof CustomError) {
      console.log(`> task4 Custom Error Caught: ${err.message}`);
    } else {
      console.log(`> task4 Error: ${(err as Error).message}`);
    }
  }
}
task4(1);
task4(0);
task4(-1);

// task5:
function task5(str: string) {
  try {
    if (str.length <= 0) {
      throw new Error("string cannot be empty");
    }
    console.log("> task5 passed: " + str);
  } catch (err) {
    console.error("> task5 failed: " + (err as Error).message);
  }
}
task5("random billi");
task5("");

// task6:
function task6() {
  const num = Math.floor(Math.random() * 6);
  const prom = new Promise<number>((resolve, reject) => {
    if (num > 3) {
      return resolve(num);
    } else {
      return reject("less than 3");
    }
  });

  prom
    .then((resolve) => console.log("> task6 passed: ", resolve))
    .catch((err) => console.error("> task6 failed:", err));
}
task6();

// task7:
async function task7() {
  try {
    const num = Math.floor(Math.random() * 6);
    const prom = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        if (num > 3) {
          return resolve(num);
        } else {
          return reject("less than 3: " + num);
        }
      }, 500);
    });

    const res = await prom;
    console.log("> task7 passed:", res);
  } catch (err) {
    console.error("> task7 failed:", err);
  }
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
async function task9() {
  try {
    const res = await fetch("https://fakestoreapi.com/product");

    if (!res.ok) throw new Error(res.statusText);

    console.log(res);
  } catch (err) {
    console.error("> task9 failed:", (err as Error).message);
  }
}
task9();

export {};
