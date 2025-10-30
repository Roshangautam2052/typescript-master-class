// const book = {
//     title: "The title",
//     read () {
//         console.log(this)
//     }
// }

// // This will represent the object as the method is inside the object
// book.read()

// book.stopreading = function () {
//     console.log(this)
// }
// // This will represent the object as the method is inside the object
// book.stopreading();

// function watchmovie() {
//     console.log(this)
// }

// // This watchmovie represents the window object as JS runs in web-browser
// watchmovie();

// const book2 = {
//     title: "The title",
//     authors:["John", "Mark"],
//     read(){
//         console.log(this)
//     },

//     printAuthors(){
//         this.authors.forEach(function(author){
//             console.log(this.author, '-', author)
//         })
//     }
// }

// book2.printAuthors();

// 

const book = {
    title : 'the title',
    pages: 300,
    author: 'John',

};

// new Keyword for creating an object 
const book2 = new Object();

book2.title = 'Book2 title';
book2.pages = 250;
book2.author = 'Mark';


console.log(book2);

// value -> The value of the property

// writeable(boolean) -> whether this property in quesutions is writable or not 

// enumerable(boolean) -> whether we can enumerate or loop thorugh this property 

//configurable(boolean) -> The configurable property tells whether the user has the persmission to change property descriptor such as to change the value 
// of writable and enumerable settings.


console.log(Object.getOwnPropertyDescriptor(book));

const phone = new Object();

Object.defineProperty(phone, 'model', {
    value : 'title',
    writable: true,
    enumerable:true,
    configurable:true,
})

console.log(phone)

