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

function Animal(name, type) {
    this.name = name;
    this.type = type;
}

Animal.prototype.greet = function () {
    console.log(`I am ${this.name} and I am a ${this.type}.`)
}

function Human(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.fromHuman = function () {console.log('from human')};
}

Human.prototype = new Animal();

Human.prototype.hello = function (name) { 
    return name;
};

let human1 = new Human('nate', 25, 'human');

function Mammal(name, type) {
    this.name = name;
    this.type = type;
}

Mammal.prototype = new Human();

let mammal1 = new Mammal('bear', 'land mammal');

let name11, name22;
function setName (name1, name2) {
   return [name1, name2] = setName.split(' ');
}

name11 = 'nat';
name22 = 'nash';

let newArr = [name11, name22];
console.log(newArr);
console.log(newArr.join(' ').split(' '));