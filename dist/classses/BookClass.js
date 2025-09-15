"use strict";
/**
 *
 */
class Book {
    constructor(title, author, ISBN, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublishsed = yearPublished;
        this.ISBN = ISBN;
    }
}
const book = new Book("Zero to One", "Peter Theil", "1234560", 1979);
console.log(book.ISBN);
console.log(book.author);
console.log(book.title);
console.log(book.yearPublishsed);
class Ebook extends Book {
    constructor(title, author, ISBN, fileSize, format, yearPublished) {
        super(title, author, ISBN, yearPublished);
        this.fileSize = fileSize;
        this.format = format;
    }
}
const zeroToOneEbook = new Ebook("Zero to One", "Peter Theil", "1234560", 12, ".pdf", 1979);
//# sourceMappingURL=BookClass.js.map