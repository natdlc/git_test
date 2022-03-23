function passMe (theFunc) {
    return theFunc;
}

function theOneFunc(name) {
    return name;
}

let passedFunc = passMe(theOneFunc);
let myName = passedFunc('nat');

console.log(myName);