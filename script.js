testFunc();
console.log(testFunc2());

// function declaration

function testFunc() {
    console.log('i am a function DECLARED!');
}

// function expression

let testFunk = function () {
    console.log('i am a function EXPRESSED!');
};

// function declaration inside a function declaration 

function testFunc2() {
    let x;
    return x = function () {
        return 'yo i am inside testFunc2!!!';
    }
}