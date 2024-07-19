// Day 7: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197138

// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
// • Task 2: Access and log the title and author properties of the book object.
// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// • Task 6: Access and log the name of the library and the titles of all the books in the library.
// Activity 4:
// The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
// • Task 9:
// Use Object.keys and Object.values methods to log all the keys and values of the book object.

interface BookProperties {
  title: string;
  author: string;
  year: number;
}

let book: BookProperties = {
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

interface BookMethod1 extends BookProperties {
  method1: () => string;
}

const book3: BookMethod1 = {
  ...book,
  method1: function () {
    return `${this.title} by ${this.author}`;
  },
};
console.log(book3.method1());
console.log(book3);

interface BookMethod2 extends BookMethod1 {
  method2: (newYear: number) => number;
}

const book4: BookMethod2 = {
  ...book3,
  method2: function (newYear: number) {
    return (this.year = newYear);
  },
};

book4.method2(2020);
console.log(book4);

interface Book {
  title: string;
  author: string;
  year: number;
}

interface libraryInterface {
  name: string;
  books: Book[];
}

const library: libraryInterface = {
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

const book2: BookProperties = {
  title: "That time reincarnated as a slime",
  author: "Lapata bili",
  year: 2014,
};

interface book2extended extends BookProperties {
  method3: () => string;
}

const task7: book2extended = {
  ...book2,
  method3: function () {
    return `${this.title} by ${this.author}`;
  },
};
console.log(task7.method3());

function task8() {
  for (const prop in task7) {
    if (task7.hasOwnProperty(prop)) {
      // Use type assertion to access the property value dynamically
      console.log(`task7.${prop} = ${task7[prop as keyof book2extended]}`);
    }
  }
}
task8();

function task9() {
  console.log("Keys:", Object.keys(task7));
  console.log("Values:", (<any>Object).values(task7)); // potential sol: update lib: ES2017
}
task9();

export {};
