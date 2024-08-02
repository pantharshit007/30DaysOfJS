"use strict";
// Day 21: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197449
Object.defineProperty(exports, "__esModule", { value: true });
// task1:
function twoSum(nums, target) {
    const hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if (hash.has(remaining)) {
            return [hash.get(remaining), i];
        }
        hash.set(nums[i], i);
    }
    return [];
}
const res = twoSum([2, 7, 11, 15], 9);
console.log("> task1:", res);
// task2:
var reverse = function (x) {
    let res = 0;
    let isNeg = false;
    if (x < 0) {
        isNeg = true;
        x *= -1;
    }
    while (x > 0) {
        res = res * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (res > 2 ** 31 - 1)
        return 0;
    return isNeg ? res * -1 : res;
};
console.log("> task2:", reverse(123));
// task3:
var isPalindrome = function (x) {
    if (x < 0)
        return false;
    const og = x;
    let res = 0;
    while (x > 0) {
        res = res * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return res === og;
};
console.log("> task3:", isPalindrome(-123));
console.log("> task3:", isPalindrome(121));
// task4:
// https://leetcode.com/problems/merge-two-sorted-lists/submissions/1342216795
//! Have done all the code onto Leetcode.
// task5:
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack[stack.length - 1];
            if ((char === ")" && top === "(") ||
                (char === "]" && top === "[") ||
                (char === "}" && top === "{")) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log("> task5:", isValid("()[]{}"));
console.log("> task5:", isValid("(]"));
