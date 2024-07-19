"use strict";
// Day 7: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197138
Object.defineProperty(exports, "__esModule", { value: true });
let book = {
    title: "Musuko Tensei",
    author: "Kisi Moto",
    year: 2016,
};
function task1() {
    const book = {
        title: "Musuko Tensei",
        author: "Kisi Moto",
        year: 2016,
    };
    return book;
}
console.log(task1());
console.log(book.title);
console.log(book.author);
const book3 = Object.assign(Object.assign({}, book), { method1: function () {
        return `${this.title} by ${this.author}`;
    } });
console.log(book3.method1());
console.log(book3);
const book4 = Object.assign(Object.assign({}, book3), { method2: function (newYear) {
        return (this.year = newYear);
    } });
book4.method2(2020);
console.log(book4);
const library = {
    name: "NY Library",
    books: [
        {
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            year: 2008,
        },
        {
            title: "Full-Stack JavaScript",
            author: "Eric Freeman",
            year: 2021,
        },
        {
            title: "Mastering Full-Stack Development",
            author: "Jane Smith",
            year: 2022,
        },
    ],
};
console.log(library);
function task6() {
    console.log(library.name);
    library.books.map((book) => {
        console.log(book.title);
        return;
    });
}
task6();
const book2 = {
    title: "That time reincarnated as a slime",
    author: "Lapata bili",
    year: 2014,
};
const task7 = Object.assign(Object.assign({}, book2), { method3: function () {
        return `${this.title} by ${this.author}`;
    } });
console.log(task7.method3());
function task8() {
    for (const prop in task7) {
        if (task7.hasOwnProperty(prop)) {
            // Use type assertion to access the property value dynamically
            console.log(`task7.${prop} = ${task7[prop]}`);
        }
    }
}
task8();
function task9() {
    console.log("Keys:", Object.keys(task7));
    console.log("Values:", Object.values(task7)); // potential sol: update lib: ES2017
}
task9();
