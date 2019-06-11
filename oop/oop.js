const s1 = 'test';
console.log(typeof s1);
const s2 = new String('test');
console.log(typeof s2);


// creating an object literal will strictly define an object
// in es6 class was introduced that emulates a similar idea
// using a constructor es5 way
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
// es5 just uses functions to define objects
const book = new Book('test','test','test');
console.log(book);
// adding functions to a object in this way is innefficient
// because the functions will be copied multiple times
// instead use
Book.prototype.getSummary = function () {
    return `${this.title} test`
}
console.log(book.getSummary());

Magazine.prototype = Object.create(Book.prototype);

class Book2 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}