"use strict";
class Book {
    constructor(title) {
        this.title = title;
    }
    read() {
        return `I'm reading ${this.title}!`;
    }
}
class PaperBook extends Book {
    constructor(title, pages) {
        super(title);
        this.pages = pages;
    }
    read() {
        return `I'm reading a paper book!`;
    }
}
class ElectronicBook extends Book {
    constructor(title, size) {
        super(title);
        this.size = size;
    }
    read() {
        return `I'm reading a digital book!`;
    }
}
class ParchmentBook extends Book {
    constructor(title, length) {
        super(title);
        this.length = length;
    }
}
class ReadBook {
    constructor(books) {
        this.books = books;
    }
    read() {
        return this.books.read();
    }
}
const phisicalBook = new PaperBook("Dragones de papel", 350);
const digitalBook = new ElectronicBook("One piece", 150);
const readerPaper = new ReadBook(phisicalBook);
const readerDigital = new ReadBook(digitalBook);
console.log(readerDigital.read());
console.log(readerPaper.read());
