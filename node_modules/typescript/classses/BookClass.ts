/**
 * 
 */

class Book {
    title:string;
    author: string;
    yearPublishsed?: number;
    readonly ISBN: string;

    constructor(title:string, author:string,  ISBN:string, yearPublished?:number){
        this.title = title;
        this.author = author;
        this.yearPublishsed = yearPublished;
        this.ISBN = ISBN;
    }

}

const book:Book = new Book("Zero to One", "Peter Theil", "1234560", 1979);

console.log(book.ISBN);
console.log(book.author);
console.log(book.title);
console.log(book.yearPublishsed);

class Ebook extends Book {
    fileSize: number;
    format:string;

    constructor
    (
        title:string, 
        author:string,  
        ISBN:string, 
        fileSize:number, 
        format:string,
        yearPublished?:number
    ){
        super(title, author, ISBN, yearPublished)
        this.fileSize = fileSize;
        this.format  = format;
    }
}

const zeroToOneEbook:Ebook = new Ebook("Zero to One", "Peter Theil", "1234560", 12, ".pdf",1979)