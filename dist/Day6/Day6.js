"use strict";
// Day 6: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197124
Object.defineProperty(exports, "__esModule", { value: true });
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
    let newArr = [];
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
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = [];
        for (let j = 0; j < num; j++) {
            arr[i][j] = i * num + j + 1;
        }
    }
    console.log(arr);
})();
function task13() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    console.log(matrix[1][1]);
}
task13();
