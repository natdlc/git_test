// function Book(t, a, p, r) {
//     this.title = t;
//     this.author = a;
//     this.pages = p;
//     this.read = r;
//     this.info = function() {
//         if (r == 'yes') {
//             return `${t} by ${a}, ${p} pages, already read`;
//         }
//         else {
//             return `${t} by ${a}, ${p} pages, not read yet`;
//         };
//     };
// };

// let bookTitle = prompt('Enter book title');
// let bookAuthor = prompt('Enter book author');
// let bookPages = prompt('Enter # of pages');
// let bookRead = prompt('Have you read the book? (yes or no)');

// let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
// console.log(newBook.info());

function Con1(name, age) {
    this.name = name;
    this.age = age;
}

Con1.prototype.testFunc = function () {
    return `${this.name} ${this.age}`;
}
Con1.prototype.testFunc2 = () => `${this.name} ${this.age} from testfunc2`;

function Con2(loc, zip) {
    this.loc = loc;
    this.zip = zip;
}

Con2.prototype = new Con1();

let Con3 = new Con2;
Con3.newProp = 'hello';
console.log(Con3)