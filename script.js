class TestClass {
    constructor(name) {
        this.name = name;
    }
}

const obj1 = new TestClass('test1');
const obj2 = new TestClass('test2');
const objLib = {};

const addNewBook = obj => {
    objLib[`${obj.name}`] = obj;
    console.log(objLib);
}

addNewBook(obj1);
addNewBook(obj2);

const deleteBook = obj => {
    
}