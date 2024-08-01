"use strict";
// Day 20: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197439
Object.defineProperty(exports, "__esModule", { value: true });
// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
// • Task 2: Write a regular expression to match all digits in a string. Log the matches.
// Activity 2: Character Classes and Quantifiers
// • Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
// • Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
// Activity 3: Grouping and Capturing
// • Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
// • Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
// Activity 4: Assertions and Boundaries
// • Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
// • Task 8.
// • Write a regular expression to match a word only if it is at the end of a string. Log the matches.
// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
// task1:
function task1() {
    const s1 = "Javascript Is Shit";
    const s2 = "Shit is JavaScript";
    const expression = /JavaScript/gi;
    console.log("> task1:", s1.match(expression));
    console.log("> task1:", s2.match(expression));
}
task1();
// task2:
function task2() {
    const s1 = "js 123 random 56";
    const regex = /\d+/g;
    console.log("> task2:", s1.match(regex));
}
task2();
// task3:
function task3() {
    const s = "One Red Random fox jumps over the moon";
    const regex = /[A-Z]/g;
    console.log("> task3:", s.match(regex));
}
task3();
// task4:
function task4() {
    const s = "231 453 moon 231 2";
    const regex = /\d+/g;
    console.log("> task4:", s.match(regex));
}
task4();
// task5:
function task5() {
    const s = "(123) 456-7890)";
    const regex = /\d+/g;
    console.log("> task5:", s.match(regex));
}
task5();
// task6:
function task6() {
    const s = "random@billi.meo ,jetha@billi.meo";
    // const regex = /[^@]/
    const regex = /(\w+)@(\w+\.\w+)/g;
    let match;
    while ((match = regex.exec(s)) !== null) {
        console.log(match);
        console.log("> task6: Username:", match[1], "Domain:", match[2]);
    }
}
task6();
// task7:
function task7() {
    var _a;
    const s1 = "random billi goes to market";
    const s2 = "market goes random billi";
    const regex = /^random/;
    console.log("> task7:", (_a = s1.match(regex)) === null || _a === void 0 ? void 0 : _a.index);
    console.log("> task7:", s2.match(regex));
}
task7();
// task8:
function task8() {
    var _a;
    const s1 = "random billi goes to market";
    const s2 = "market goes random billi";
    const s3 = "the final word is random";
    const regex = /random$/;
    console.log("> task8:", s1.match(regex));
    console.log("> task8:", s2.match(regex));
    console.log("> task8:", (_a = s3.match(regex)) === null || _a === void 0 ? void 0 : _a.index);
}
task8();
// task9:
function task9() {
    const s1 = "Az6@";
    const s2 = "az6@";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    console.log("> task9:", s1.match(regex));
    console.log("> task9:", s2.match(regex));
}
// ^ and $: These ensure that the entire string is checked, from start to end.
// (?=.*[a-z]): Ensures there is at least one lowercase letter.
// (?=.*[A-Z]): Ensures there is at least one uppercase letter.
// (?=.*\d): Ensures there is at least one digit.
// (?=.*[@$!%*?&]): Ensures there is at least one special character from the set @$!%*?&.
// [A-Za-z\d@$!%*?&]+: Matches the entire string ensuring it only contains valid characters.
task9();
// task10:
function task10() {
    const s1 = "http://www.google.com";
    const s2 = "https://neetcode.io";
    const regex = /^(https?:\/\/)?(www\.)?([\w-]+)(\.\w{2,})(\/\S*)?$/;
    console.log("> task10:", s1.match(regex));
    console.log("> task10:", s2.match(regex));
}
task10();
