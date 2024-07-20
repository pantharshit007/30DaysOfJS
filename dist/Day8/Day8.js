"use strict";
// Day 8: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197148
Object.defineProperty(exports, "__esModule", { value: true });
function task1(name, age) {
    console.log(`My name is ${name} and age is ${age}`);
}
task1("Natkhat Billi", 21);
function task2() {
    console.log(`Hajiremaste!
Watashiwa neko-desu!`);
}
task2();
function task3(arr) {
    const [x, y] = arr;
    console.log("first:", x, "second:", y);
}
task3([1, 2, 3, 4, 5]);
function task4(book) {
    const { title, author } = book;
    console.log(`${title} is written by ${author}`);
}
const book = {
    title: "Yellow flash of Leaf",
    author: "Kisi Moto",
};
task4(book);
function task5(num1, num2) {
    const arr = [1, 2, 3, 4, 5];
    const arr1 = [...arr, num1, num2];
    console.log(arr1);
}
task5(6, 7);
function task6(...num) {
    return num.reduce((acc, curr) => (acc += curr), 0);
}
console.log(task6(1, 2, 3, 4, 5));
console.log(task6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function task7(num1, num2 = 1) {
    return num1 * num2;
}
console.log(task7(2, 3));
console.log(task7(2));
function task8() {
    const color = "red";
    const object = {
        x: 5,
        y: 10,
        color,
        method() {
            return `X= ${this.x} Y = ${this.y} color= ${color}`;
        },
    };
    console.log(object);
}
task8();
function task9(id, name, price) {
    const product = {};
    product[id] = {
        name,
        price,
        [name + " price > 700"]: price > 700,
    };
    return product;
}
const productId = 124;
const res = task9(productId, "Random", 699);
console.log(res);
