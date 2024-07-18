// Day 6: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197124

// Activity 1: Array Creation and Access
// • Task 1.
// • Create an array of numbers from 1 to 5 and log the array to the console.
// • Task 2: Access the first and last elements of the array and log them to the console.
// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
// • Task 4:
// Use the pop method to remove the last element from the array and log the updated array.
// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
// • Task 9.
// • Use the reduce method to calculate the sum of all numbers in the array and log the result.
// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
// • Task 13: Access and log a specific element from the two-dimensional array.

const task1 = () => {
  const arr = new Array();
  for (let i = 1; i <= 5; i++) {
    arr.push(i);
  }
  console.log(arr);
};
task1();

function task2() {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr[0], "|", arr[arr.length - 1]);
}
task2();

function task3() {
  const arr = [1, 2, 3, 4, 5];
  arr.push(10);
  console.log(arr);
}
task3();

function task4() {
  const arr = [1, 2, 3, 4, 5];
  arr.pop();
  console.log(arr);
}
task4();

function task5() {
  const arr = [1, 2, 3, 4, 5];
  arr.shift();
  console.log(arr);
}
task5();

function task6() {
  const arr = [1, 2, 3, 4, 5];
  arr.unshift(10);
  console.log(arr);
}
task6();

function task7() {
  const arr = [1, 2, 3, 4, 5];
  let newArr: number[] = [];
  arr.map((elem) => {
    return newArr.push(elem * 2);
  });

  console.log(newArr);
}
task7();

function task8() {
  const arr = [1, 2, 3, 4, 5];
  //   let newArr: number[] = [];
  const newArr = arr.filter((elem) => elem % 2 == 0);
  console.log(newArr);
}
task8();

function task9() {
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.reduce((acc, elem) => (acc += elem));
  console.log(newArr);
}
task9();

(function task10() {
  const arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(">", i);
  }
})();

(function task11() {
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((elem) => console.log("->", elem));
})();

(function task12() {
  const num = 5;
  const arr: number[][] = [];

  for (let i = 0; i < num; i++) {
    arr[i] = [];
    for (let j = 0; j < num; j++) {
      arr[i][j] = i * num + j + 1;
    }
  }
  console.log(arr);
})();

function task13() {
  const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(matrix[1][1]);
}
task13();

export {};
