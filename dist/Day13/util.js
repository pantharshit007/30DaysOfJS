"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = exports.subNum = exports.addNum = void 0;
function addNum(num1, num2) {
    return num1 + num2;
}
exports.addNum = addNum;
function subNum(num1, num2) {
    return num1 - num2;
}
exports.subNum = subNum;
const obj = (name, age) => ({
    name: name,
    age: age,
    method1() {
        return `${this.name} is ${this.age} years old`;
    },
});
exports.obj = obj;
function areaOfCircle(radius) {
    const area = (3.14 * radius * radius).toFixed(2);
    return `Area of circle with ${radius}: ${area}`;
}
exports.default = areaOfCircle;
