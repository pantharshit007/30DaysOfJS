"use strict";
// Day 14: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197221
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Account_balance;
Object.defineProperty(exports, "__esModule", { value: true });
// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.
// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of the Student class and log the student ID.
// • Task 4:
// Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.
// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class Person {
    // name: string;
    // age: number;
    constructor(name, age, lastName) {
        this.name = name;
        this.age = age;
        this.lastName = lastName;
    }
    // getter func
    get getterFunc() {
        return this.intro();
    }
    // getter func
    get fullName() {
        return this.task7();
    }
    //setter func
    set newName(lastName) {
        this.name = this.name + " " + lastName;
    }
    intro() {
        return `${this.name} is ${this.age} years old!`;
    }
    task2(newAge) {
        this.age = newAge;
        return `New age of ${this.name} is ${this.age} years old!`;
    }
    static task5(name) {
        return `Hello ${name}!`;
    }
    task7() {
        return `Hello ${this.name} ${this.lastName}!`;
    }
}
// task1:
const task1 = new Person("random Billi", 21);
console.log("> task1:", task1.getterFunc);
// task2:
const task2 = new Person("random Billi", 21);
console.log("> task2:", task2.task2(19));
// task3:
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.totalStudent++;
        console.log(`> task6: Total number of students: ${Student.totalStudent}`);
    }
    task3() {
        return `Student ID: ${this.studentId}`;
    }
    intro() {
        return `${this.name}'s Student Id: ${this.studentId}`;
    }
}
Student.totalStudent = 0;
const student = new Student("random Billi", 21, "S12345");
console.log("> task3:", student.task3());
// task4:
const task4 = new Student("random Billi", 21, "S54321");
console.log("> task4:", task4.intro());
// task5:
console.log("> task5:", Person.task5("random Billi"));
// task6:
const student2 = new Student("random Dog", 23, "S12347");
// task7:
const task7 = new Person("random", 21, "user");
console.log("> task7:", task7.fullName);
// task8:
const task8 = new Person("John", 21);
task8.newName = "Doe";
console.log("> task8:", task8.intro());
// task9:
class Account {
    constructor(balance) {
        _Account_balance.set(this, void 0);
        __classPrivateFieldSet(this, _Account_balance, balance, "f");
    }
    deposit(amount) {
        if (amount > 0) {
            __classPrivateFieldSet(this, _Account_balance, __classPrivateFieldGet(this, _Account_balance, "f") + amount, "f");
        }
        else {
            console.log("Deposit amount must be positive");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= __classPrivateFieldGet(this, _Account_balance, "f")) {
            __classPrivateFieldSet(this, _Account_balance, __classPrivateFieldGet(this, _Account_balance, "f") - amount, "f");
        }
        else {
            console.log("Invalid withdraw amount");
        }
    }
    getBalance() {
        return __classPrivateFieldGet(this, _Account_balance, "f");
    }
}
_Account_balance = new WeakMap();
// task10:
const task9 = new Account(1000);
// deposit money
task9.deposit(200);
console.log("> task9 deposit:", task9.getBalance());
// withdraw money
task9.withdraw(300);
console.log("> task9 withdraw:", task9.getBalance());
// Get current balance
console.log("> task10:", task9.getBalance());
